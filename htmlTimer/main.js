console.log("hello world");
/*
let a = "안녕하세요";

console.log(a.length);

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
*/
// let num = 1;
// let num1 = 2;

// if (num === num1) {
//   console.log(1);
// } else {
//   console.log(2);
//}

// console.log(typeof "문자열");

// console.log(typeof 123.456);

// if (typeof 1 === "number") {
//   console.log(1);
// }

// templet
//console.log(`표현식 273 + 52의 값은 ${273 + 52}입니다....!`);

// const pi = 3.141592;
// console.log(pi);

// let num1 = 1;
// let num2 = 2;

// num1 > num2 ? console.log(1) : console.log(2);

// console.log(typeof num1);

// const ipt = prompt("Message");

//console.log(ipt);
/*
const bol = confirm("Select Yes or No");

bol === true ? console.log("a") : console.log("b");
*/

// 아스키 코드를 활용하지 않는다?
// let str = "a";

// let strtoNum = Number(str);

// console.log(strtoNum);

// let min = "123" - 123;

// console.log(min);

// let num = 100;

// let numtoStr = String(num);

// console.log(typeof numtoStr);

// let str = 123 + "12345";

// console.log(str);

// let bol = !!undefined;

//console.log(bol);

// if ("273" > "123") {
//   console.log("big");
// } else {
//   console.log("small");
//}

// let ipt = prompt("Select your month");

// switch (ipt) {
//   case "1":
//   case "2":
//   case "3":
//     alert("Spring");
//     break;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.push(11);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr[13] = 13;
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.pop();
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.slice(3, 1);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const idx = arr.indexOf(3);
// arr.slice(idx, 1);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let str = "abcdefg";

// for (let i in str) {
//   console.log(i);
//   console.log(str[i]);
// }

/*
let a = 1;

const arr = [a, "abc", 1];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/
// function valinfo(str) {
//   console.log(`type = ${typeof str} ` + `length = ${str.length}`);
// }

// let a = "123";

// valinfo(a);
/*
function samplefun(...item) {
  console.log(item);
}

const arr = [1, 2, 3, 4, 5];

samplefun(arr);

samplefun(...arr);
*/

// function callThreeTimes(callback) {
//   for (let i = 0; i < 3; i++) {
//     callback(i);
//   }
// }

//const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 중괄호 사용 시 반환을 따로 해줘야 햔다.

//foreach는 배열요소들을 한번만 실행
//let num = arr.map((ele, idx) => console.log(`${idx} - ${ele}`); return 0;);

// var result2 = arr.map((ele, idx, arr) => [ele + idx, ...arr]);

// var result2 = arr.map((ele, idx, arr) => console.log(arr));

//console.log(result2);

// const arr2 = [10, 20, 30, 40, 50];

// const result = arr2.map((ele) => ele * 2);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const eresult = arr.filter((ele) => ele % 2 === 0);

// const result = eresult.map((ele) => ele * 2);

// console.log(result);

// setTimeout(() => {
//   console.log("1초 후에 실행됩니다");
// }, 1 * 1000);

// let cnt = 0;

// let timer = 1000;

// const timerID = setInterval(() => {
//   console.log(`${timer / 1000}초마다 실행됩니다 ${cnt}번째`);
//   cnt++;
// }, timer);

// setTimeout(() => {
//   clearInterval(timerID);
// }, 10000);

// console.log(timerID);

let hour = 16;
let min = 6;
let sec = 0;

const timerID = setInterval(() => {
  console.log(
    `${hour.toString().length < 2 ? "0" + hour : hour} : ${
      min.toString().length < 2 ? "0" + min : min
    } : ${sec.toString().length < 2 ? "0" + sec : sec}`
  );

  // document.querySelector(".hour.bgColor").innerText;
  // document.getElementsByTagName();
  // document.getElementById();

  document.querySelector(".hour.bgColor").innerText =
    hour.toString().length < 2 ? "0" + hour : hour;
  document.querySelector(".min.bgColor").innerText =
    min.toString().length < 2 ? "0" + min : min;
  document.querySelector(".sec.bgColor").innerText =
    sec.toString().length < 2 ? "0" + sec : sec;

  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  } else if (min === 60) {
    min = 0;
    hour++;
  }
  // if (sec % 10 === 0) {
  //   const timeout = confirm("정지하시겠습니까?");
  //   if (timeout === true) {
  //     clearInterval(timerID);
  //   }
  // }
}, 1000);
