/*Proposed Solution
The problem is solved using External Sorting

Idea is simple to divide file and Sort It i.e dividing 10GB data into 1GB chunk Each and Sorting It and Saving Individually
Now using MergeSort to Sort 2 Individual Sorted Array and combine them at End
Steps: 
      Divide the data into 10 chunks of size 1gb each.
      Sort each Chunk and write to disk.
      Load 20 items from each chunk into main memory.
      Output the smallest item from the main memory to disk. Load the next item from the group whose item was chosen.
      loop over above step until all items are not outputted.

I have executed following Code using an NPM Library called externalsort which does this steps internally
*/
const fs = require('fs');
const esort = require('external-sort');
const input = fs.createReadStream('unsorted.txt'); //InputFile
const output = fs.createWriteStream('sortedarray.txt'); //IOutputFile

esort(input, output, {
  deserializer: parseInt, //Parse everything to Integer
  maxHeap: 1024, //MemorySize Maximum allowed
});
