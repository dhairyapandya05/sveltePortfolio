<script lang="ts">
	import { Button, Dropdown, DropdownItem, A } from 'flowbite-svelte';
	import { ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
	import { Chart } from 'flowbite-svelte';
	import type { ApexOptions } from 'apexcharts';

	let options: ApexOptions = {
		chart: {
			type: 'bar',
			height: 300,
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
				borderRadius: 4
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		xaxis: {
			categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			labels: {
				style: {
					colors: '#6B7280',
					fontSize: '12px'
				}
			}
		},
		yaxis: {
			labels: {
				style: {
					colors: '#6B7280',
					fontSize: '12px'
				}
			}
		},
		fill: {
			opacity: 1,
			colors: ['#1A56DB']
		},
		series: [
			{
				name: 'Leads',
				data: [650, 590, 800, 810, 560, 550, 400]
			}
		],
		grid: {
			show: true,
			borderColor: '#E5E7EB',
			strokeDashArray: 4,
			position: 'back'
		},
		legend: {
			show: false
		}
	};
</script>

<div class="w-full max-w-sm rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
	<div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
		<div class="flex items-center">
			<div
				class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
			>
				<svg
					class="h-6 w-6 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 19"
				>
					<path
						d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
					/>
					<path
						d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"
					/>
				</svg>
			</div>
			<div>
				<h5 class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">3.4k</h5>
				<p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p>
			</div>
		</div>
		<div>
			<span
				class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
			>
				<svg
					class="me-1.5 h-2.5 w-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13V1m0 0L1 5m4-4 4 4"
					/>
				</svg>
				42.5%
			</span>
		</div>
	</div>

	<div class="grid grid-cols-2">
		<dl class="flex items-center">
			<dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Money spent:</dt>
			<dd class="text-sm font-semibold text-gray-900 dark:text-white">$3,232</dd>
		</dl>
		<dl class="flex items-center justify-end">
			<dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Conversion rate:</dt>
			<dd class="text-sm font-semibold text-gray-900 dark:text-white">1.2%</dd>
		</dl>
	</div>

	<div class="py-6">
		<Chart {options} />
	</div>

	<div
		class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
	>
		<div class="flex items-center justify-between pt-5">
			<Button
				class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent"
			>
				Last 7 days
				<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" />
			</Button>
			<Dropdown class="w-40" offset={-6}>
				<DropdownItem>Yesterday</DropdownItem>
				<DropdownItem>Today</DropdownItem>
				<DropdownItem>Last 7 days</DropdownItem>
				<DropdownItem>Last 30 days</DropdownItem>
				<DropdownItem>Last 90 days</DropdownItem>
			</Dropdown>
			<A
				href=""
				class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
			>
				Leads Report
				<ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
			</A>
		</div>
	</div>
</div>
