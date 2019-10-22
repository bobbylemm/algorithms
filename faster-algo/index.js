// so here you can see we created an algo that checks whether the array is unique or not, the main thing is not really this sha, I want us to take a look at the time complexity of this algo and see what the big O is. looking at this at first glance I think we can say the time complexity is linear time complex. why is this so, well I can say that just by seeing the forloop inside of it, we can see that is the major work done by this function. and the we have 2 forloops, one outter and one inner.

const isUnique = arr => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log("this is the outter loop" + i);

    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  return result;
};
console.log(isUnique([1, 1, 3, 4]));
console.log(isUnique([1, 2, 3, 4]));
// let us write another algo that would definetly be faster, something that would have less time complexity.
const isUnique2 = arr => {
  let result = true;
  let breadcrumbs = {};

  for (let i = 0; i < arr.length; i++) {
    if (breadcrumbs[arr[i]]) {
      result = false;
    } else {
      breadcrumbs[arr[i]] = true;
    }
  }
  return result;
};
console.log(isUnique2([2, 3, 52]));

//

const uniqSort = arr => {
  const breadcrumbs = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] === true;
    }
  }
  return result.sort((a, b) => a - b);
};
