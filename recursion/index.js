let tracker = 0;
// recursion is a siper cool way of looping, it makes me feel cool.
const callMe = () => {
  tracker++;
  if (tracker === 3) {
    return "it loops";
  }
  return callMe("anytime");
};

// identify your base case
// -> this is the condition that if met we want to exit our loop.

//identify your recursive case
// -> this is a very important aspect of recursion, this is because we are not just looping for no reason. we have to make sure that as we continue looping we get closer to our base case if not we just keep looping and then get into an infinite loop, the browser crashes.

function MemoFnLoop(i, end) {
  if(i < end) {
    MemoFnLoop(i + 1, end);
    ~~~~~~~~~~~~~~~
    //now in recursion it is important to note that everything under the function call above would excute late, that is after we have met our base case, then we would pop off all the function body MemoFnLoop in our call stack.
  }
}
// lets play a game called the CALL STACK GAME
// so when we call MemoFnLoop(1,3), this is what happens

function MemoFnLoop(1, 3) {
  if(1 < 3 // which is defintely true) {
    MemoFnLoop(2, 3);
  }
}

// javascript would push our function again to the call stack, and we would run this.

function MemoFnLoop(2, 3) {
  if(2 < 3 // which is defintely true) {
    MemoFnLoop(3, 3);
  }
}

function MemoFnLoop(3, 3) {
  if(3 < 3 // which is as you know is now false) {
    MemoFnLoop(3, 3);
  }
}
// so the recursive call would give us false, and then our function would start getting popped of the call stack.

// so here I want to create a factorial algorithm, a factorial is simply a concept where a number would multiply all the numbers lesser than it self up until zero.
function computeFactorial(num) {
  let result = 1;

  for(let i = 2; i < num; i++) {
    console.log(`${result} * ${i}`);
    result *= i;
  }
  return result;
}
// changing this into a recursion, so we would have a recursive factorial method.

const computeRecursiveFactorial = memoizeFactorial((x) => {
  if(x === 0) {
    return 1;
  }else {
    return  x * computeRecursiveFactorial(x - 1);
  }
})
memoizeFactorial = (fn) => {
  let cache = {}
  return (...args) => {
    let n = args[0];
    if(n in cache) {
      return cache[n];
    }else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

// so the above is done like this in React I think, where you wrap the function call in a memoize function and then it keeps track of the changes in the function, and then if it exists it uses it instead. Let me try it agian just to be sure I know what I am doing.

//first I would write the function like I have defined every thing, coding optimistically.

const computeFactorialMemo = memoThisThing((x) => {
  if(x === 0) {
    return 1;
  }else {
    return x * computeFactorialMemo(x - 1);
  }
})

// now to define the memoize function

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
  if(n in cache) {
    return cache[n];
  } else {
    let result = fn(n);
    cache[n] = result;
    return result;
  }
  }
}
// so when I call it, it would return the closure
const call1 = computeFactorialMemo;
call1([5])
