<script lang="ts">

	import BatchCards from "$lib/custom_components/BatchCards.svelte";
	import { db } from "$lib/firebase";
	import { doc, getDoc } from "firebase/firestore";
	import { onMount } from "svelte";
    let allowedbatchescategories=["SUBMISSION","ANNUAL"];
    interface Badge {
      icon: string;
      shortName: string;
      gitimage: string;
      iconGifBackground: string;
    }

    let badgesData: Badge[] = $state([]);
    onMount(async ()=>{
        console.log("Wea re on onMount");
  const docId = 'dhairyapandya05' ;
			const docRef = doc(db, 'leetcodeData', docId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const batchesresponse = docSnap.data().data.matchedUser.badges;
        console.log("jsonString: batchhhhhhhhh ",batchesresponse);
        badgesData = batchesresponse
  .filter((it: any) => allowedbatchescategories.includes(it.category))
  .map((it: any) => ({
    icon: it.icon,
    shortName: it.shortName,
    gitimage: it.medal.config.iconGif,
    iconGifBackground: it.medal.config.iconGifBackground,
  }));
  console.log("badgesData: ",badgesData);


			}

    });
</script>
<div class="flex item-center justify-center gap-x-4 my-2">
    {#each badgesData as badge}
    <BatchCards src={badge.icon} title={badge.shortName}/>
  {/each}
</div>