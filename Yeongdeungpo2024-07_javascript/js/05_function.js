// 기명함수 ( 이름이 있는 함수 )
function name() {
  console.log("함수실행");
}
name();

// 익명함수 ( 이름이 없는 함수 )
const getName = function (name) {
  console.log(`제 이름은 ${name}입니다.`);
};

// getName("안채완");
// getName("안승채");
// getName("안희곤");

// 반환

// 매개변수
function sum(num1, num2) {
  return num1 + num2;
  // console.log(num1 + num2);
}
//NaN : Not a Number
const a = sum(2, "3");
const b = sum(10, 20);
// console.log(a);
// console.log(b);

// 함수 호이스팅
function sayHi() {
  console.log("안녕하세요?");
}
sayHi();

// 화살표 함수
// 호출 스케줄링
