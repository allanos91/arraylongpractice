const findMinimum = arr => { // time o(n), space o(1)
  if (!arr.length) {
    return undefined
  }
  return Math.min(...arr)

};

const runningSum = arr => { //time o(n^2), space o(n2)
  if (!arr.length) {
    return arr
  }
  let newArr = []
  let copyArr = arr.slice()
  let total = copyArr.reduce((acc, num) => {
    return acc + num
  })
  newArr.push(total)
  arr.pop()
  return runningSum(arr).concat(newArr)
};

const evenNumOfChars = arr => { //time O(N), space O(1)
  let counter = 0
  arr.forEach(string => {
    if (string.length % 2 === 0) {
      counter++
    }
  })
  return counter
};

const smallerThanCurr = arr => { //time O(N^2), space O(n)
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        counter ++
      }
    }
    newArr.push(counter)
  }
  return newArr
};

const twoSum = (arr, target) => { //time O(n^2), space O(1)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true
      }
    }
  }
  return false
};

const secondLargest = arr => { //time O(n^2),
  if (arr.length < 2) {
    return undefined
  }
  let index = arr.indexOf(Math.max(...arr))
  arr.splice(index, 1)
  return Math.max(...arr)
};


const shuffle = (arr) => {
  let shuffled = []
  let placeHolder = Math.random() // 0.9
  let randIndex = Math.round(Math.floor(arr.length * placeHolder)) //arr.length = 1,
  if (!arr.length) {
    return shuffled;
  }
  shuffled.push(arr[randIndex])
  arr.splice(randIndex, 1);
  // console.log(arr)
  return shuffle(arr).concat(...shuffled);
};

console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
