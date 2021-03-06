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
function makeTitle(str) {
  // Write your code here
  let firstLet = str.split(" ").map(x => {
    let d = x[0].toUpperCase();
    
    let r = x.split("");
    r.shift();
    r = r.join("");
    return d + r;
    
  }
    ).join(" ");
  return firstLet;
  
}

// Question 6
function gimme(arr) {
  // Write your code here
  let max = arr[0];
  let min = arr[2];
  let adjust = arr.map( x=> {
    max = x>max? x:max;
    min = x<min? x:min;
  });
  let result;
  let loop = arr.map(x=>(x==max || x==min)?"":result =arr.indexOf(x));
  return result;
}

function arrayDiff (arr,arr2){
  let big = [];
  for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if (!(arr[i] === arr2[j])) {
        big.push(arr[i]);
      }
    }
  }
  return big;
  
}

function findMissingLength(arr){
  let lengths = [];
  let result;
  let fill = arr.map(x=>{
    lengths.push(x.length)
    return false;
  });
  lengths.sort((a,b)=>a-b);
  let solve = lengths.map((x,i)=>{
    return (x == i+1)?result=i+2:result = i;
  });
  // console.log(lengths, result, solve, fill);
  return result;
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
