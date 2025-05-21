<script lang="ts">
	import BatchCards from '$lib/custom_components/BatchCards.svelte';
	import { onMount } from 'svelte';
	import Card from './ui/card/card.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';

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

<div class="flex w-full justify-center py-10">
	<div class="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
		<!-- Total Questions -->
		<a
			href=""
			class="block flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<span class="mb-3 text-base font-medium tracking-wide text-gray-400">Total Questions</span>
			<span class="mb-1 text-5xl font-extrabold text-gray-900 dark:text-white"
				>{totalQuestions}</span
			>
		</a>
		<!-- Total Active Days -->
		<a
			href=""
			class="block flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<span class="mb-3 text-base font-medium tracking-wide text-gray-400">Total Active Days</span>
			<span class="mb-1 text-5xl font-extrabold text-gray-900 dark:text-white"
				>{totalActiveDays}</span
			>
		</a>
		<!-- Total Contests -->
		<a
			href=""
			class="block flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<span class="mb-3 text-base font-medium tracking-wide text-gray-400">Total Contests</span>
			<span class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">{totalContests}</span
			>
			<div class="flex w-full flex-col gap-2">
				<div class="flex w-full items-center justify-between">
					<span class="rounded bg-gray-800 px-3 py-1 text-xs font-semibold text-yellow-400"
						>LeetCode</span
					>
					<span class="text-base font-bold text-gray-900 dark:text-white">{leetCodeContests}</span>
				</div>
				<div class="flex w-full items-center justify-between">
					<span class="rounded bg-gray-800 px-3 py-1 text-xs font-semibold text-green-400"
						>GeeksForGeeks</span
					>
					<span class="text-base font-bold text-gray-900 dark:text-white">{gfgContests}</span>
				</div>
				<div class="flex w-full items-center justify-between">
					<span class="rounded bg-gray-800 px-3 py-1 text-xs font-semibold text-orange-400"
						>CodeStudio</span
					>
					<span class="text-base font-bold text-gray-900 dark:text-white">{codeStudioContests}</span
					>
				</div>
			</div>
		</a>
		<!-- Problems Solved -->
		<a
			href=""
			class="block flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<span class="mb-3 text-base font-medium tracking-wide text-gray-400">Problems Solved</span>
			<span class="mb-2 text-lg font-semibold text-gray-400">Fundamentals</span>
			<div class="flex items-center gap-3">
				<span
					class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-2xl font-extrabold text-white shadow"
					>{problemsSolved}</span
				>
				<span class="text-lg font-semibold text-green-400">GFG</span>
				<span class="text-xl font-extrabold text-gray-900 dark:text-white">{problemsSolved}</span>
			</div>
		</a>
	</div>
</div>
