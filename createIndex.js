/* use fs with the commands:
	let dictionary = fs.readFileSync("./smallDictionary.txt");
	fs.writeFileSync("./myIndex.txt", "A BIG STRING OF STUFF!");
*/
const fs = require('fs');

//let fatString = [];
	let dictionary = fs.readFileSync("./bigDictionary.txt").toString();
	dictionary = dictionary.split("\r\n");
	for (let i = 0; i < dictionary.length; i++) {
		let throwawayString = dictionary[i].split("");
		quickSort(throwawayString,0,throwawayString.length-1);
		dictionary[i] = throwawayString.join("");
	}
	quickSort(dictionary, 0, dictionary.length-1);
	//fs.writeFileSync("./myIndex.txt", fatString);
	console.log(dictionary);
	fs.writeFileSync("./myIndex.txt", dictionary.join("\r\n"));

// Think about your components:
// first you sort each work to
// get a alphanumerical word, and

// then you sort each word against
// each other words alphanumerical word
// Hmm...
// We wish you well!

console.log("\nHey!");




const extra = require('./extra');

// function beatChallenge() {
// 	let bigString = extra.randomString();
// 	bigString = bigString.split();
// 	console.log(bigString);
// 	for (let val = 0; val < bigString.length; val++) {
// 		bigString[val] = bigString[val].charAt();
// 	}
// 	console.log(bigString);

// 	// sort bigString:
// 	quickSort(bigString,0,bigString.length-1);
// 	// YOUR CODE HERE...
// 	console.log(bigString);
// 	extra.isSorted(bigString);
// }

// beatChallenge();



/* low  --> Starting index,  high  --> Ending index */
function quickSort(arr, low, high) {
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is now
           at right place */
        p = partition(arr, low, high);

        quickSort(arr, low, p - 1);  // Before pi
        quickSort(arr, p + 1, high); // After pi
    }
}

function partition (arr, low, high) {
    // pivot (Element to be placed at right position)
    let pivot = arr[high];
 
    let i = (low - 1)  // Index of smaller element and indicates the 
                   // right position of pivot found so far

    for (j = low; j <= high- 1; j++)
    {
        // If current element is smaller than the pivot
        if (arr[j] < pivot)
        {
            i++;    // increment index of smaller element
            //swap arr[i] and arr[j]
            swapa(arr, i, j);
        }
    }
    // swap arr[i + 1] and arr[high])
    swapa(arr, i + 1, high);

    return (i + 1);
}


function swapa(arr, one, two) {
let throwaway = arr[one];
arr[one] = arr[two];
arr[two] = throwaway;
}