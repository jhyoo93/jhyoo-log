// forEach
const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {
  console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});

// map
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]

// filter
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];

const apples = devices.filter((element, index, array) => {
  return element.brand === 'Apple';
});

console.log(apples); // (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]

// find
const myLaptop = devices.find((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
  return element.name === 'Gram';
});

console.log(myLaptop); // {name: "Gram", brand: "LG"}

// some
const numbers2 = [1, 3, 5, 7, 9];

// 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers2.some((element, index, array) => {
  console.log(index); // 콘솔에는 0, 1, 2, 3까지만 출력됨.
  return element > 5;
});

console.log(someReturn); // true;

// every
// 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers2.every((element, index, array) => {
  console.log(index); // 콘솔에는 0까지만 출력됨.
  return element > 5;
});

console.log(everyReturn); // false;

// reduce
const numbers3 = [1, 2, 3, 4];

const sumAll = numbers3.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

console.log(sumAll); // 10

// sort
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers4 = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers4); // (5) [1, 10, 21, 36000, 4]

// reverse 
const letters2 = ['a', 'c', 'b'];
const numbers5 = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters2); // (3) ["b", "c", "a"]
console.log(numbers5); // (3) [353, 721, 421]

// map
// Map 생성
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0