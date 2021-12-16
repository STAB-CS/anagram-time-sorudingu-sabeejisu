//QUERYING
const fs = require('fs');

let dictionary = fs.readFileSync("./myIndex.txt").toString().split("\r\n");

query("pat");

function query(str) {
	//sort query str
	str = str.split("");
	quickSort(str, 0, str.length-1);

	//initialize anagram list
	let anagrams = [];

	//use binary search get range of words with the same starting value
	let middleIndex = binarySearch(dictionary, 0, dictionary.length, str);
	let startingIndex = checkHigherNeighborWords(middleIndex)
	let afterIndex = checkLowerNeighborWords(middleIndex, dictionary.length);

	//use linear search among the subarr to get our anagram
	for (let i = startingIndex; i <= afterIndex; i++) {
		//grab sorted version of dictionary word
		let sortedword = dictionary[i].split(" | ")[0];
        let realword = dictionary[i].split(" | ")[1];

		//console.log(sortedword[0], str.join(""));
		if (sortedword == str.join("")) {
			//console.log("sexypiggie");
		
            anagrams.push(realword);
		}
	}

	console.log(anagrams);
}

function checkHigherNeighborWords(index) {
	while (index > 0) {
	//	console.log(index)
		if (dictionary[index].split("")[0] == dictionary[index-1].split("")[0]) {
			index = index - 1;
		}else {
			return index;
		}
	}

	//check base cases
	if (index == 0) {
		return index;
	}
}

function checkLowerNeighborWords(index, length) {
	while (index < length-1) {
	//	console.log(index)
		if (dictionary[index].split("")[0] == dictionary[index+1].split("")[0]) {
			index = index + 1;
		} else {
			return index;
		}
	}

	//check base cases
	if (index == length-1) {
		return index;
	}
}

//binary search function
function binarySearch(arr, l, r, x){
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);

        if (arr[mid].split("")[0] == x[0])
            return mid;

        if (arr[mid].split("")[0] > x[0])
            return binarySearch(arr, l, mid - 1, x);
 
        return binarySearch(arr, mid + 1, r, x);
    }

    return -1;
}

//quick sort function
function quickSort(arr, start, end) {
	if (start < end) {
		let pivot = partition(arr, start, end);

		//sort each partition based on pivot pos
		quickSort(arr, start, pivot-1);
		quickSort(arr, pivot+1, end);
	} 
}

function partition(arr, start, end) {
	//intialize variables of arr indices
	let p = end;
	let j = start;
	let i = j-1;

	//check between j and p while j < p
	while (j < p) {
		if (arr[j] < arr[p]) {
			//increment i by 1
			i += 1;

			//swap i and j
			let temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}

		//move j by 1 pos
		j += 1;
	}

	//swap between p and i+1
	let temp = arr[p];
	arr[p] = arr[i+1];
	arr[i+1] = temp;

	//change pivot
	p = i + 1;
	return p;
}