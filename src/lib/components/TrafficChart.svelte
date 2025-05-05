<script lang="ts">
  import { Dropdown, DropdownItem, A } from 'flowbite-svelte';
  import { ChevronRightOutline, ChevronDownOutline, DownloadOutline } from 'flowbite-svelte-icons';
  import { Chart } from 'flowbite-svelte';
  import type { ApexOptions } from 'apexcharts';
  import { onMount } from 'svelte';
  import { doc, getDoc } from 'firebase/firestore';
  import { db } from '$lib/firebase';

  interface QuestionStats {
    difficulty: string;
    count: number;
  }
let colorpalet=['#2DBA4E', '#facc15', '#c40c0c'];
let levels=['Easy', 'Medium', 'Hard'];
  let questionsStats = $state<QuestionStats[]>([]);
  let questionsSeries: number[] = $derived.by(() => {
    return questionsStats
      .filter((it: QuestionStats) => it.difficulty !== "All")
      .map((it: QuestionStats) => it.count);
  });

  let options: ApexOptions = $state({
    chart: {
      type: 'donut',
      height: 350
    },
    
    dataLabels: {
  enabled: true,
  formatter(val: number, opts: any): [string, string] {
    return [`${val.toFixed(1)}%`];
  },
  style: {
    fontSize: '16px', // You can adjust the size as needed
    fontWeight: 'bold',
    colors: ['#fff'] // Optional: change text color
  },
},
    series: [],
    labels: levels,
    colors: colorpalet,
    tooltip: {
  custom: function({ series, seriesIndex}) {
    const value = series[seriesIndex];
    const color=colorpalet[seriesIndex];
    const level=levels[seriesIndex];
    return `
      <div class="flex flex-col gap-2 rounded-xl bg-[#2A2F3A] px-5 py-3 text-sm font-medium text-[#CBD5E1] shadow-md w-fit">
        <div class="flex items-center gap-3">
    <span class="h-3 w-3 rounded-full" style="background-color: ${color};"></span>
          <div class="flex items-center gap-1">
            <span class="">${level}</span>
            <span class=" text-bold text-white">${value} </span>
            <span class="">solved</span>
          </div>
        </div>
      </div>
    `;
  }
},

legend: {
  position: 'bottom',
  fontSize: '14px',              
  fontWeight: 600,               
  labels: {
    colors: ['#1E293B'],         
    useSeriesColors: false       
  },
  formatter: function (val: string, opts: any) {
    // Return legend text as a string
    return val;
  }
}
  });

  onMount(async () => {
    const docId = 'dhairyapandya05';
    const docRef = doc(db, 'leetcodeData', docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const numberofquestionsdata = docSnap.data().data.matchedUser.submitStatsGlobal.acSubmissionNum;
      console.log("jsonString: numberofquestionsdata ", numberofquestionsdata);
      
      questionsStats = numberofquestionsdata.map((it: any) => ({
        difficulty: it.difficulty,
        count: it.count
      }));
      
      options = {
        ...options,
        series: questionsSeries
      };
    }
  });
</script>

<div class="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
  <div class="flex justify-between mb-3">
    <div class="flex justify-center items-center">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Problems Solved</h5>
    </div>
    <div>
    </div>
  </div>

  <!-- Donut Chart -->
  <div class="py-12">
    <Chart {options} />
  </div>

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
				class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
			>
				Profile Link
				<ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
			</A>
		</div>
	</div>
</div> 
