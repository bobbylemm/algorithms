// here I want to implement linear search. what is linear search you ask, linear is search is simply a searching algorithm where we search a given dataset by going through it one by one until we get the data we are looking for. the list does not have to be sorted, which makes sense. if we have a sorted list we might just have to stick with Binary search.

// the time complexity of using a linear search is linear, because the worst case scenario is that the number we are looking for would be at the last place, best case it would be a the beginning. But we are only considering the worst case scenario.
const linearSearch = (array, num) => {
  let index = -1; // this means that the index is not found, -1 means false
  array.forEach((number, i) => {
    if (number === num) {
      index = i;
    }
  });
  return index;
};
linearSearch([1, 24, 5, 959, 34, 13], 34);

// BINARY SEARCH =>>>>>>>>>>>>>>

// so binary search is a Divide an conquer technique that invloves, splitting the dataset you want to search into two (it might be equal or slightly less).
// lets look at a simple illustration of how I might use Binary search to find a number in an array.

const binarySearch = (array, num) => {
  let guess;
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (num === array[guess]) {
      return guess;
    } else {
      if (array[guess] < num) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
};
// so I did something that messed up with the logic I used. So as I go through the list it is important to know the state of my current guess, it helps me know what point I am on in the list, since the list must be sorted, it helps with the movement of the point.

// this is me trying to implement an algorithm that implements binary search

const binarySearch = (array, itemToBeFound) => {
  let guess;
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (itemToBeFound === array[guess]) {
      return guess;
    } else {
      if (array[guess] < itemToBeFound) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
};
