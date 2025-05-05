<script lang="ts">
	import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
	import type { ApexOptions } from 'apexcharts';
	import TrafficChart from './TrafficChart.svelte';
	import ProfitChart from './ProfitChart.svelte';
	import LeadsChart from './LeadsChart.svelte';
	import { onMount } from 'svelte';
	import { db } from '$lib/firebase';
	import { doc, getDoc } from 'firebase/firestore';

	interface ContestData {
    date:number;
		title: string;
		problemsSolved: number;
		rating: number;
		ranking: number;
		totalProblems: number;
		trendDirection: string;
	}

	let attendedContestData: ContestData[] = $state([]);
	let ratings: number[] = $state([]);
  let maxRating=$derived(ratings.length ? Math.max(...ratings) : 0);
  let minRating=$derived(ratings.length ? Math.min(...ratings) : 0);
  let percentageChange=$derived(Math.floor((Math.abs(maxRating-minRating)/minRating)*100));
	let contestTitles: number[] = $state([]);
	let options: ApexOptions = $state({
		chart: {
			height: 400,
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: true
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			x: {
				format: 'dd MMM yyyy'
			},
			custom: function({ series, seriesIndex, dataPointIndex, w }) {
				const value = series[seriesIndex][dataPointIndex];
				const date = new Date(contestTitles[dataPointIndex]);
				const formattedDate = date.toLocaleDateString('en-US', { 
					day: 'numeric',
					month: 'short',
					year: 'numeric'
				});
				return `
					<div class="flex flex-col gap-2 rounded-xl bg-[#2A2F3A] px-5 py-3 text-sm font-medium text-[#CBD5E1] shadow-md w-fit">
  <div class="flex items-center gap-3">
    <span class="h-3 w-3 rounded-full bg-[#FEA016]"></span>
    <div class="flex items-center gap-1">
      <span>Rating:</span>
      <span class="font-bold text-white">${value}</span>
    </div>
  </div>
  <div class="text-xs text-gray-400 pl-6">${formattedDate}</div>
</div>

				`;
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#fea016',
				gradientToColors: ['#fea016']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [{
			name: 'Contest Rating',
			data: [],
			color: '#fea016'
		}],
		xaxis: {
			type: 'datetime',
			categories: [],
			labels: {
				show: true,
				datetimeFormatter: {
					year: 'yyyy',
					month: "MMM 'yy",
					day: 'dd MMM',
					hour: 'HH:mm',
				},
				style: {
					colors: '#CBD5E1'
				}
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: true,
				color: '#fea016'
			}
		},
		yaxis: {
			show: true,
			labels: {
				style: {
					colors: '#CBD5E1'
				}
			}
		}
	});

	onMount(async () => {
		const docId = 'dhairyapandya05';
		const docRef = doc(db, 'leetcodeData', docId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			let response = docSnap.data().data.userContestRankingHistory;
			
			attendedContestData = response
				.filter((it: any) => it.attended === true)
				.map((it: any) => ({
					title: it.contest.title,
					date: it.contest.startTime * 1000,
					problemsSolved: it.problemsSolved,
					rating: Math.floor(it.rating),
					ranking: it.ranking,
					totalProblems: it.totalProblems,
					trendDirection: it.trendDirection
				}));
			
			ratings = attendedContestData.map(item => item.rating);
			contestTitles = attendedContestData.map(item => item.date);
			
			// Update options with new data
			options = {
				...options,
				series: [{
					name: 'Contest Rating',
					data: ratings,
					color: '#fea016'
				}],
				xaxis: {
					...options.xaxis,
					categories: contestTitles
				}
			};
			
			// console.log("Response from line graph: ", attendedContestData);
		}
	});
</script>

<Card>
	<div class="flex justify-between">
		<div>
			<h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">{maxRating}</h5>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">Highest Rating</p>
		</div>
		<div
			class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500"
		>
			${percentageChange}%
			<ChevronRightOutline class="ms-1 h-6 w-6" />
		</div>
	</div>
	<Chart {options} />
	<div
		class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
	>
		<div class="flex items-center justify-between pt-5">
			<div
				class="flex items-center gap-2 px-3 py-1 rounded-lg transition-colors duration-200 hover:bg-[#23272f]"
			>
				<img src="/leetcodelogo.png" alt="LeetCode logo" class="w-7 h-7 rounded-full shadow-md" />
				<span class="font-semibold text-base text-[#fea016]">LeetCode</span>
			</div>
			
			<A
				href="https://leetcode.com/u/dhairyapandya05/"
				class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 text-white"
			>
				Profile Link
				<ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
			</A>
		</div>
	</div>
</Card>


