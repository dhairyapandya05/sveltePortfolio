import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';

/**
 * Fetches the LeetCode heatmap data for the user 'dhairyapandya052024' from Firestore.
 * @returns {Promise<Object>} The heatmap data object from Firestore.
 */
export async function fetchLeetcodeHeatmapData(year:string) {
  const docRef = doc(db, 'leetcodeHeatmaps', 'dhairyapandya05'+year);
  
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    throw new Error('No such document!');
  }
}



