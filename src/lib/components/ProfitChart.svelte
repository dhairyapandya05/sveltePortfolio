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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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
      colors: ['#1A56DB', '#7E3AF2']
    },
    series: [
      {
        name: 'Income',
        data: [6500, 6418, 6456, 6526, 6356, 6456]
      },
      {
        name: 'Expense',
        data: [4000, 4200, 4500, 4800, 5000, 5200]
      }
    ],
    grid: {
      show: true,
      borderColor: '#E5E7EB',
      strokeDashArray: 4,
      position: 'back'
    },
    legend: {
      show: true,
      position: 'bottom'
    }
  };
</script>

<div class="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
  <div class="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Profit</dt>
      <dd class="leading-none text-3xl font-bold text-gray-900 dark:text-white">$5,405</dd>
    </dl>
    <div>
      <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
        <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        Profit rate 23.5%
      </span>
    </div>
  </div>

  <div class="grid grid-cols-2 py-3">
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Income</dt>
      <dd class="leading-none text-xl font-bold text-green-500 dark:text-green-400">$23,635</dd>
    </dl>
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Expense</dt>
      <dd class="leading-none text-xl font-bold text-red-600 dark:text-red-500">-$18,230</dd>
    </dl>
  </div>

  <div class="py-6">
    <Chart {options} />
  </div>

  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">
        Last 6 months
        <ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" />
      </Button>
      <Dropdown class="w-40" offset={-6}>
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
        <DropdownItem>Last 6 months</DropdownItem>
        <DropdownItem>Last year</DropdownItem>
      </Dropdown>
      <A href="#" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Revenue Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</div> 