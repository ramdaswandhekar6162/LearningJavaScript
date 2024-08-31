
// ways of declare java script array

const arr = [];

for(let i = 1; i < 5; i++) {
    arr.push(i);
}

// display array

arr.forEach(element => {
   console.log(element); 
});

//
console.log("we can print manually also");

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// multi dimen array or 2d array in js

let arr1 = [];

arr1[0]=[];

arr1[0].push(1);
arr1[0].push(2);

console.log("2D arrays..............");

console.log(arr1[0][0]);
console.log(arr1[0][1]);
