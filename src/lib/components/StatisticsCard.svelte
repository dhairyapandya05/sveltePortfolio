<script lang="ts">
	import BatchCards from "$lib/custom_components/BatchCards.svelte";
	import { onMount } from "svelte";
import Card from "./ui/card/card.svelte";
	import { doc, getDoc } from "firebase/firestore";
	import { db } from "$lib/firebase";

// No external data for now, static values as per the screenshot
const totalQuestions = 1086;
const totalActiveDays = 444;
const totalContests = 34;
const leetCodeContests = 32;
const gfgContests = 1;
const codeStudioContests = 1;
const problemsSolved = 9;


// onMount(async()=>{
//   const docId = 'dhairyapandya05' ;
// 			const docRef = doc(db, 'leetcodeHeatmaps', docId);
// 			const docSnap = await getDoc(docRef);
// 			if (docSnap.exists()) {
// 				const jsonString = docSnap.data().data;
//         console.log("jsonString: ",jsonString);
// 			}
// });


</script>




<div class="w-full flex justify-center py-10">
  <div class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <!-- Total Questions -->
    <a href="#" class="block p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col items-center transition-all duration-200">
      <span class="text-gray-400 text-base mb-3 font-medium tracking-wide">Total Questions</span>
      <span class="text-5xl font-extrabold text-gray-900 dark:text-white mb-1">{totalQuestions}</span>
    </a>
    <!-- Total Active Days -->
    <a href="#" class="block p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col items-center transition-all duration-200">
      <span class="text-gray-400 text-base mb-3 font-medium tracking-wide">Total Active Days</span>
      <span class="text-5xl font-extrabold text-gray-900 dark:text-white mb-1">{totalActiveDays}</span>
    </a>
    <!-- Total Contests -->
    <a href="#" class="block p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col items-center transition-all duration-200">
      <span class="text-gray-400 text-base mb-3 font-medium tracking-wide">Total Contests</span>
      <span class="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{totalContests}</span>
      <div class="flex flex-col gap-2 w-full">
        <div class="flex items-center justify-between w-full">
          <span class="bg-gray-800 px-3 py-1 rounded text-xs text-yellow-400 font-semibold">LeetCode</span>
          <span class="text-gray-900 dark:text-white text-base font-bold">{leetCodeContests}</span>
        </div>
        <div class="flex items-center justify-between w-full">
          <span class="bg-gray-800 px-3 py-1 rounded text-xs text-green-400 font-semibold">GeeksForGeeks</span>
          <span class="text-gray-900 dark:text-white text-base font-bold">{gfgContests}</span>
        </div>
        <div class="flex items-center justify-between w-full">
          <span class="bg-gray-800 px-3 py-1 rounded text-xs text-orange-400 font-semibold">CodeStudio</span>
          <span class="text-gray-900 dark:text-white text-base font-bold">{codeStudioContests}</span>
        </div>
      </div>
    </a>
    <!-- Problems Solved -->
    <a href="#" class="block p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col items-center transition-all duration-200">
      <span class="text-gray-400 text-base mb-3 font-medium tracking-wide">Problems Solved</span>
      <span class="text-lg text-gray-400 mb-2 font-semibold">Fundamentals</span>
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white font-extrabold text-2xl shadow">{problemsSolved}</span>
        <span class="text-green-400 font-semibold text-lg">GFG</span>
        <span class="text-gray-900 dark:text-white font-extrabold text-xl">{problemsSolved}</span>
      </div>
    </a>
  </div>
</div> 