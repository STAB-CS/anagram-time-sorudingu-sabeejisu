const fs = require('fs');

let dictionary = fs.readFileSync("./bigDictionary.txt").toString().split("\r\n");

//sort every word in dictionary
for (let i = 0; i < dictionary.length; i++) {
	let string = dictionary[i].split("");
	quickSort(string, 0, string.length);
	dictionary[i] = string.join("") + " | " + dictionary[i];
}

//sort dictionary
quickSort(dictionary, 0, dictionary.length-1);

//write to file
fs.writeFileSync("./myIndex.txt", dictionary.join("\r\n"));

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