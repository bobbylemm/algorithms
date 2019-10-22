// so the accumulatore technique is a technique we use in recursion, this technique would have take in values or anything and them be accumulating it and then be passing it down to the closure (that is if we are using closures), it would pass the aggregator to the next recursive function being called. and then we keep iterating till we meet our base case.

function joinElement(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];
    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }
  return recurse(0, "");
}
joinElement(["s", "cr", "t cod", " :) :)"], "e");

// transform this recursive algorithm to use normal loops

function joinElement(array, joinString) {
  let resultSoFar = "";
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      resultSoFar += `${array[i]}${joinString}`;
    } else {
      resultSoFar += array[i];
    }
  }
  return resultSoFar;
}
joinElement(["s", "cr", "t cod", " :) :)"], "e");
