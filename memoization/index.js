// this exercise would take a look at how memoization works in programming. it is a basic example but it really explains how to memoization works.
// so memoization is a programming techinique where functions essentially rememeber the results of previous calls made. so it is basically a  type of caching.
// let us still continue with our example and then try to improve it's time complexity by taking advantage of memoization techniques.
const times10 = n => n * 10;
const memoTimes10 = () => {
  const cache = {};

  return n => {
    if (n in cache) {
      console.log("fetching from cache");
      return cache[n];
    }
    console.log("calculating afresh");
    cache[n] = times10(n);
    return times10(n);
  };
};

const memoTimes = memoTimes10();
console.log(memoTimes(5));
