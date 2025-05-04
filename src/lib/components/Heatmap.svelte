<script lang="ts">
	import { onMount } from 'svelte';
	import CalHeatmap from 'cal-heatmap';
	import 'cal-heatmap/cal-heatmap.css';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone';
	interface heatmapdata {
		date: Date;
		value: number;
		tooltip: number;
	}
	dayjs.extend(utc);
	dayjs.extend(timezone);

	// Use this function to format your dates in IST
	function getDateString(date) {
		return dayjs(date).tz('Asia/Kolkata').format('YYYY-MM-DD');
	}
	let heatmapContainer: HTMLElement;
	let cal: CalHeatmap;
	let tooltipEl: HTMLDivElement;

	function parseHeatmapData(jsonString: string) {
		try {
			const heatmap = JSON.parse(jsonString);
			const dataMap = new Map<string, number>(
				Object.entries(heatmap).map(([timestamp, value]) => {
					const date = new Date(Number(timestamp) * 1000).toISOString().split('T')[0];
					return [date, Number(value)];
				})
			);

			const parsedData = [];
			const startDate = new Date('2024-01-01');
			const endDate = new Date('2024-12-31');
			for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
				const formattedDate = date.toISOString().split('T')[0];
				parsedData.push({
					date: formattedDate,
					value: dataMap.get(formattedDate) ?? 0
				});
			}
			console.log('Parsed data is: ', parsedData);
			return parsedData;
		} catch (error) {
			console.error('Invalid JSON string:', error);
			return [];
		}
	}
	function getNormalizedHeatmapData(formatedHeatmapdata: { date: string; value: number }[]) {
		if (!formatedHeatmapdata.length) return [];
		return formatedHeatmapdata.map((d) => {
			let normalized = d.value;
			if (normalized == 0) normalized = 0;
			else if (normalized == 1) normalized = 1;
			else if (normalized >= 2 && normalized <= 3) normalized = 2;
			else if (normalized >= 4 && normalized <= 8) normalized = 3;
			else normalized = 4;
			// 0,1,2,3 remain unchanged
			return {
				date: d.date,
				value: normalized,
				tooltip: d.value
			};
		});
	}

	// function getDateString(date: Date) {
	// 	return date.toISOString().split('T')[0];
	// }

	async function getRollingYearHeatmapData() {
		const today = new Date();
		const endDate = new Date(today);

		const rollingYearDate = new Date(today);
		rollingYearDate.setDate(today.getDate() - 364);
		const startDate = new Date(rollingYearDate.getFullYear(), rollingYearDate.getMonth(), 1);
		console.log('Start date is: ', startDate);
		console.log('End date is: ', endDate);
		console.log('Rolling year date is: ', rollingYearDate);
		const years = [];
		if (startDate.getFullYear() !== endDate.getFullYear()) {
			years.push(startDate.getFullYear());
		}
		years.push(endDate.getFullYear());

		let allData: Record<string, number> = {};

		// Fetch and merge data for all needed years
		for (const year of years) {
			const docId = 'dhairyapandya05' + year;
			const docRef = doc(db, 'leetcodeHeatmaps', docId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const jsonString = docSnap.data().data.data.matchedUser.userCalendar.submissionCalendar;
				const yearData = JSON.parse(jsonString);
				Object.assign(allData, yearData);
			}
		}

		// Build a map of date string to value
		const dataMap = new Map<string, number>(
			Object.entries(allData).map(([timestamp, value]) => {
				const date = new Date(Number(timestamp) * 1000).toISOString().split('T')[0];
				return [date, Number(value)];
			})
		);

		const parsedData = [];
		for (
			let date = new Date(startDate.getTime());
			date <= endDate;
			date.setDate(date.getDate() + 1)
		) {
			const formattedDate = getDateString(date); // uses IST
			parsedData.push({
				date: formattedDate,
				value: dataMap.get(formattedDate) ?? 0
			});
		}
		console.log('Parsed data is: ', parsedData);
		return parsedData;
	}

	onMount(() => {
		async function loadAndPaint() {
			const formatedHeatmapdata = await getRollingYearHeatmapData();
			console.log('Formated heatmap data is: ⭐ ', formatedHeatmapdata);
			const normalizedData = getNormalizedHeatmapData(formatedHeatmapdata);
			console.log('Normalised data: ', normalizedData);

			cal = new CalHeatmap();

			// Define event listeners before paint, as per documentation
			// @ts-ignore
			cal.on('mouseover', (event: any, timestamp: any, value: any) => {
				if (tooltipEl && event.target) {
					const date = new Date(timestamp);
					const dateStrFormatted = date.toISOString().split('T')[0]; // "YYYY-MM-DD" format

					// Find matching object in normalizedData by date
					const dataObj = normalizedData.find((item) => item.date === dateStrFormatted);
					const tooltipValue = dataObj?.tooltip ?? 'No data';

					// Tooltip UI string
					const displayDateStr = date.toLocaleDateString('en-GB', {
						day: '2-digit',
						month: 'short',
						year: '2-digit'
					});

					tooltipEl.innerHTML = `<b>${displayDateStr}</b> : <span style="color: #2DBA4E; font-weight: 600;">${tooltipValue}</span> submissions`;

					tooltipEl.style.opacity = '1';

					const rect = event.target.getBoundingClientRect();
					const left = rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2;
					const top = rect.top - tooltipEl.offsetHeight - 8;

					tooltipEl.style.left = `${left}px`;
					tooltipEl.style.top = `${top}px`;
				}
			});

			// @ts-ignore
			cal.on('mouseout', () => {
				if (tooltipEl) {
					tooltipEl.style.opacity = '0';
				}
			});

			cal.paint({
				itemSelector: heatmapContainer,
				domain: {
					type: 'month',
					label: { text: 'MMM', textAlign: 'middle', position: 'top' },
					gutter: 12
				},
				subDomain: {
					type: 'day',
					radius: 2,
					width: 11,
					height: 11,
					gutter: 4
				},
				date: {
					start: new Date(normalizedData[0]?.date),
					highlight: new Date()
				},

				data: {
					source: normalizedData,
					x: 'date',
					y: 'value'
				},
				scale: {
					color: {
						type: 'linear',
						range: [
							'#ffffff14', // 0 - subtle, visible on dark bg
							'#016620', // 1 - very dark green
							'#109932', // 2 - dark, more saturated
							'#02c244', // 3 - medium green
							'#7fe18b'
						],
						domain: [0, 1, 2, 3, 4]
					}
				}
			});
		}
		loadAndPaint();

		return () => {
			if (cal) cal.destroy();
		};
	});

	export async function getLeetcodeHeatmapDoc(year: string) {
		const docRef = doc(db, 'leetcodeHeatmaps', 'dhairyapandya05' + year);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			throw new Error('No such document!');
		}
	}
</script>

<div class="relative rounded-xl p-4 text-white shadow-lg">
	<h2 class="mb-4 text-2xl font-bold">Activity Heatmap</h2>
	<div bind:this={heatmapContainer} class="w-full overflow-x-auto"></div>
	<div
		bind:this={tooltipEl}
		class="pointer-events-none fixed z-[9999] rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow transition-opacity duration-100"
		style="left:0;top:0;min-width:120px;text-align:center;"
	></div>
</div>
