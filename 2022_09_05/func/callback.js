"use strict";

// const arr = [
//   "강석원",
//   "박종훈",
//   "윤승준",
//   "이슬비",
//   "이정운",
//   "이종석",
//   "이진우",
//   "장효택",
//   "정도현",
//   "최도원",
//   "최승준",
// ];

// arr.push("홍길동");

// console.log(arr.join(" "));

// let delArr = arr.pop();

// console.log(delArr);

// console.log(arr.join(" "));

// arr.push(1234);

// arr.push([1, 2, 3, 4, 5]);

// console.log(arr.join(" "));

// arr.reverse();

// console.log(arr.join(" "));

// const arrFilter = arr.filter((ele) => {
//   let result = false;

//   console.log(ele.indexOf("이", 0));

//   ele.indexOf("이", 0) === 0 ? (result = true) : (result = false);

//   ele.indexOf(0) === "이" ? (result = true) : (result = false);

//   return result;
// });

// const arrFilter2 = arr.filter((ele) => {
//   let result = false;

//   ele.indexOf("효", 1) === 1 ? (result = true) : (result = false);

//   return result;
// });

// console.log(arrFilter2.join(" "));

// const arrFilter = arr.filter((ele, idx, arr) => {
//   console.log(`${ele}, ${idx}`);
//   if (ele % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(arrFilter);

// const arr = [21, 42, 63, 84, 105];

// const arrFilter = arr.filter((ele, idx, arr) => {
//   console.log(`${ele}, ${idx}`);
//   if (ele % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(arrFilter.map);

// const forEachResult = arr.forEach((ele) => {
//   console.log(`${ele}`);
// });

// console.log(forEachResult);

// const mapResult = arr.map((ele) => {
//   console.log(`${ele}`);
//   return ele * ele;
// });

// console.log(mapResult.join(" "));

// const call3Times = (callback) => {
//   console.log(typeof callback);
//   for (let i = 0; i < 3; i++) {
//     if (i === 2) {
//       callback(i);
//     }
//   }
// };

// const myPrint = (idx) => {
//   console.log(`${idx} 번째`);
// };

// // call3Times(myPrint);

// call3Times(function (idx) {
//   console.log(`${idx} 번째`);
// });
