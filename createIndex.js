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