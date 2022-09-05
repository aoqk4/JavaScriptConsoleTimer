"use strict";

// object

// const testObj = {
//   name: null,
//   grade: null,

//   getName: () => {
//     return this.name;
//   },

//   getGrade: () => {
//     return this.grade;
//   },

//   setName: (oName) => {
//     this.name = oName;
//   },

//   setGrade: (oGrade) => {
//     this.grade = oGrade;
//   },
// };

// JSON.stringify();

// testObj.setGrade(5);

// console.log(testObj.getGrade());

// Number.prototype.sample = 10;

// const test = 1;

// console.log(test.sample);

// callback example : filter

// const numbers = [0, 1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(...evenNumbers);

// 전개연산자 ...은 배열 안의 숫자들을 풀어주는 역활

// parameter의 자료형에 따라 다르게 작동하는 min()함수

// const minOtherPara = (first, ...rests) => {
//   let output;

//   let items;

//   if (Array.isArray(first)) {
//     output = first[0];
//     items = first;
//   } else if (typeof first === "number") {
//     output = first;
//     items = rests;
//   }

//   for (const item of items) {
//     output > item ? (output = item) : null;
//   }

//   return output;
// };

// console.log(minOtherPara([51, 235, 1235, 3562, 4, 1]));
// console.log(minOtherPara(51, 235, 1235, 3562, 4, 1));

// console.log의 구현

// const myPrint = (...data) => {
//   console.log(data.join(","));
// };

// myPrint(1, "1234", undefined, null, true);
// console.log(1, "1234", undefined, null, true);

// const strInput = "안녕, 하세요, 선문대, 입니다";

// console.log(strInput.split(","));

// const strInputArr = strInput.split(",");

// console.log(strInputArr.join(" "));

// const min = (a, b) => {
//   let result;

//   a > b ? (result = b) : (result = a);

//   return result;
// };

// console.log(min(20, 23));

// const max = (a, b) => {
//   let result;

//   a > b ? (result = a) : (result = b);

//   return result;
// };

// console.log(max(23, 20));

// const min3Val = (a, b, c) => {
//   let result;

//   a > b ? (result = b) : (result = a);

//   result > c ? (result = c) : null;

//   return result;
// };

// console.log(min3Val(4, 3, 1));

// arr의 최소치를 구하는 함수
// const input = [40, 20, 30, 10];

// const minArr = (arr) => {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     total > arr[i] ? (total = arr[i]) : null;
//   }

//   return total;
// };
// console.log(minArr(input));

// arr의 최소치를 구하는 함수 (map를 이용한.)
// const minArrToMap = (arr) => {
//   let result = arr[0];
//   arr.map((ele) => {
//     result > ele ? (result = ele) : null;
//   });

//   return result;
// };

// console.log(minArrToMap(input));

// arr의 쵀디치를 구하는 함수
// const maxArr = (arr) => {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     total < arr[i] ? (total = arr[i]) : null;
//   }

//   return total;
// };

// console.log(maxArr(input));

// arr의 최대치를 구하는 함수 (map를 이용한.)
// const maxArrToMap = (arr) => {
//   let result = arr[0];
//   arr.map((ele) => {
//     result < ele ? (result = ele) : null;
//   });

//   return result;
// };

// console.log(maxArrToMap(input));

// const maxArrToForEach = (arr) => {
//   let result = arr[0];
//   arr.forEach((ele) => {
//     result < ele ? (result = ele) : null;
//   });

//   return result;
// };
// console.log(maxArrToForEach(input));

// const min = (...itmes) => {
//   for (let i in items)
// };

// min(10, 20, 30, 40, 50);

// 윤년인지 확인하는 함수
// const isLeapYear = (year) =>
//   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// console.log(isLeapYear(2000));

// const sum = (a, b) => {
//   return a + b;
// };

// const sum2 = function (a, b) {
//   return a + b;
// };

// console.log(sum(1, 2));

// console.log(sum2(3, 4));

// const sum4 = (a, b) => a + b;

// console.log(sum4(4, 5));

// let fru = prompt(undefined, "포도");

// console.log(fru);

// let abc = confirm("R you Ready?");

// console.log(abc);

//console.log("Hello Worlsd!");

// function main(a, b, c) {
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);
//   console.log(`c = ${c}`);
//   console.log(" ");

//   return a, b, c;
// }

// const main2 = function (a, b, c) {
//   console.log(`a = ${a} b = ${b} c = ${c}`);
// };

// const main3 = (a, b, c) => console.log(`a = ${a} b = ${b} c = ${c}`);

// main3(20, 10, 30);

// main2(30, 20, 10);

// main(10, 20, 30);

// console.log(typeof main);

// console.log(typeof 1234);

// console.log(typeof "1234");

// console.log(typeof [1, 2, 3, 4]);

// const obj = {
//   a: 1,
//   b: 2,
//   c: "3",
// };

// console.log(typeof obj);

// console.log(main);

// console.log(main());

// console.log(console.log);
