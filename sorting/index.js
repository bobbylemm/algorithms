// this is me writing out some sudo code and some implmentation of how I would go about a mergeSort

const mergeSort = array => {
  if (array.length < 2) {
    // break here and return the array
    return array;
  }
  // since the array is not yet less than 2, we break it into two halves
  splitArray(array);
  const leftArray = mergeSort(array); // this is the left side of the array from begging to middle - 1;
  const rightArray = mergeSort(array); // this is the right side of the array from mid to array.length - 1;
  // by now the arrays must have been split into small arrays of one
  mergeSort(leftArray, rightArray); // ->>> this is linear time complexity because you have to go through everthing.
};

// run a bubble sort algorithm on this data set
// bubble sort is a sorting technique that runs through an array and pops out the hightest number each time.

const bubbleSort = array => {
  console.log("called again");
  let currIndex = 0;
  let firstSwapVal;
  let secondSwapVal;
  for (let i = 0; i <= array.length - 1 && currIndex <= array.length - 1; i++) {
    if (array[currIndex] > array[i + 1]) {
      firstSwapVal = array[currIndex];
      secondSwapVal = array[i + 1];
      array[currIndex] = secondSwapVal;
      array[i + 1] = firstSwapVal;
      console.log(array);
    }
    currIndex += 1;
  }
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] < array[i + 1] && array[i] === array[array.length - 1]) {
      console.log("checking to see if the array is sorted finally");
      return array;
    }
  }
  return bubbleSort(array);
};
bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);

const bubbleSort = array => {
  let currIndex = 0;
  let firstSwapVal;
  let secondSwapVal;
  for (let i = 0; i <= array.length - 1 && currIndex <= array.length - 1; i++) {
    if (array[currIndex] > array[i + 1]) {
      firstSwapVal = array[currIndex];
      secondSwapVal = array[i + 1];
      array[currIndex] = secondSwapVal;
      array[i + 1] = firstSwapVal;
      console.log(array);
    }
    currIndex += 1;
  }
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] < array[i + 1] && array[i] === array[array.length - 1]) {
      return array;
    }
  }
  return bubbleSort(array);
};
bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);

// =>>>>>>>>>>>>>>>=>>>>>>>>>>>>>>>>>>>
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for (var i = 0; i < array.length; i++) {
    countOuter++;
    for (var j = 1; j < array.length; j++) {
      countInner++;
      if (array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log("outer:", countOuter, "inner:", countInner, "swap:", countSwap);
  return array;
}
console.log("~~~ ~~~ BASIC ~~~ ~~~");

console.log("\n~~~ basic: arrayRandom ~~~");
bubbleSortBasic(arrayRandom.slice());

console.log("\n~~~ basic: arrayOrdered ~~~");
bubbleSortBasic(arrayOrdered.slice());

console.log("\n~~~ basic: arrayReversed ~~~");
bubbleSortBasic(arrayReversed.slice());

// optimized
function bubbleSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  var swapped;
  do {
    countOuter++;
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      countInner++;
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  console.log("outer:", countOuter, "inner:", countInner, "swap:", countSwap);
  return array;
}

console.log("\n\n~~~ ~~~ OPTIMIZED ~~~ ~~~");

console.log("\n~~~ optimized: arrayRandom ~~~");
bubbleSort(arrayRandom.slice());

console.log("\n~~~ optimized: arrayOrdered ~~~");
bubbleSort(arrayOrdered.slice());

console.log("\n~~~ optimized: arrayReversed ~~~");
bubbleSort(arrayReversed.slice());

///// =>>>>>>>>>>>>>>>>

function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
