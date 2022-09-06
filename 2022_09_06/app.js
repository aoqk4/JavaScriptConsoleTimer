// objects

// const name = "망고";

// const price = 10000;

// const product = {
//   제품명: "7D 건조망고",
//   유형: "당절임",
//   성분: "망고,설탕,치자황색소",
//   원산지: "필리핀",
//   const: "상수",
//   js: "JavaScript",
//   1234: 5678,
//   "제품 유형": "먹는 것",
// };

// console.log(product);

// console.log(product.제품명);

// console.log(product["제품명"]);

// console.log(product.const);

// // console.log(product.1234); 숫자는 컴마로 불가능
// console.log(product[1234]);

// // console.log(product.제품 유형); 띄어쓰기가 들어간 것도 컴마로 불가능
// console.log(product["제품 유형"]);

const site = {
  사이트명: "네이버",
  url: "https://www.naver.com",
};

const product2 = {
  상품번호: 5399681697,
  제조사: "로지텍",
  모델명: "PRO X SUPERLIGHT",
  상품상태: "신상품",
  브랜드: "로지텍G",
  원산지: "중국산(로지텍코리아)",
  옵션명: ["1개", "2개", "3개"],
  중량: ["100g", "200g", "300g"],
  판매처: site,
  //   printBrand: function (myName) {
  //     console.log(`${myName} : ${this.브랜드}`);
  //     console.log(this);
  //   },
  //   printModel: () => {
  //     console.log(this); window 객체가 출력된다..
  //   },
};

// const arr = [10, 20, 30, 40, 50];

// console.log(Math.abs(-100));

// console.log(Math.round(Math.ransdom() * 100));s

// console.log(Math.max(10, 20, 30, 40, 50));
// console.log(Math.min(10, 20, 30, 40, 50));

// console.log(Math.max(...arr));

// String.prototype.toPrint = function () {
//   console.log(`[2022-09-06]` + this.valueOf());
// };

// "dd".toPrint();

// console.log(typeof product2.상품상태);

// product2.상품상태.toPrint();

// product2.옵션명[0].toPrint();

// product2.옵션명[0].toString();

// console.log(["a", "b", "c"].toString());

// console.log((1011).toString());

// const str = "           동해물과 백두산이 마르고 닳도록            ";

// console.log(str);
// console.log(str.trim().split(" "));

// const str = new String("Hello World");
// console.log(typeof str);

// str.indexOf();

// const products = [product2, product2, product2];

// console.log(products);

// const 내쇼핑몰 = {
//   제품들: products,
// };

// console.log(내쇼핑몰);

// js 에서는 array도 obj로 작동된다 -->
// 따라서 [idx]로 키를 찾는 명분을 이렇게 만들었다..

// product2.옵션명.type = "수량";

// console.log(product2.옵션명.type);

// console.log(typeof product2.상품상태);
// console.log(typeof product2.옵션명);
// console.log(product2.옵션명);

// product2.제조사 = "삼성전자";

// console.log(product2);

// product2 = "Hello World!";

// console.printf = function (str) {
//   console.log(`${str}`);
// };

// console.printf("Hello World");

// // 동적으로 새로운 객체 속성 생성 가능
// product2.고객센터 = "1588-1588";

// // 객체 속성 지우는 것도 가능
// delete product2.중량;

// console.log(product2);

// console.myName = "홍길동";

// console.log(console.myName);

// delete console.log;

// console.log("?");

// console.log(product2);

// console.log(product2.중량.join(" "));

// console.log(product2.판매처.url);

// product2.printBrand("홍길동");

// const json = JSON.stringify(product2.판매처, null, 4);
// console.log(json);

// const obj = JSON.parse(json);
// console.log(obj);

// console.log(typeof product2);

// console.log(typeof console);

// console.log(product2);

const product3 = [
  {
    name: "a",
    price: 30000,
  },
  {
    name: "b",
    price: 10000000,
  },
  {
    name: "c",
    price: 100000,
  },
];

// const months = ["!", "jan", "fav"];

// const sortResult = months.sort((num1, num2) => {
//   let result;
//   num1.length < num2.length ? (result = -1) : (result = 1);
//   return result;
// });

// const sortResult3 = product3.sort((num1, num2) => {
//   let result;
//   num1.length > num2.length ? (result = -1) : (result = 1);
//   return result;
// });

// console.log(sortResult3);
