// Question 1
function average(arr) {
  // Write your code here
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}

// Question 2
function combineArrays(arr, arr2) {
  // return arr.concat(arr2);
  return [...arr,...arr2];
}

// Question 3
function arrayPlusArray(arr, arr2) {
  // Write your code here
  let bigArr = combineArrays(arr, arr2);
  console.log(bigArr);
  const reduce = bigArr.reduce((x, elem) => {
	x += elem;
	return x;
  })
  return reduce;
}

// Question 4
function abbrevName(name) {
  //Write your code here
  return name.split(" ").map(x => x[0]).join(".");
}

// Question 5
function makeTitle() {
  // Write your code here
}

// Question 6
function gimme() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  average,
  combineArrays,
  arrayPlusArray,
  abbrevName,
  makeTitle,
  gimme
};
