/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

/**
 * 증가와 감소
 * 
 */
let num = 1;
num ++;
console.log(num);

num --;
console.log(num);

/**
 * 할당 연산자 (assignment operator)
 */
num += 10;
console.log(num);

num -= 10;
console.log(num);


/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(1 == 1); 
console.log(1 == '1');

console.log(2 == 2); 
console.log(2 == '2');


/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);


/**
 * 삼항 조건 연산자
 */
console.log(10 > 1 ? 'true' : 'false');

/**
 * 논리 연산자
 * 
 * 1) && -> 그리고
 * 2) || -> 또는
 */

console.log(true && true); // true
console.log(false && true);// false
console.log(false && false);// false

console.log(true || true); // true
console.log(false || true);// true
console.log(false || false);// false


/**
 * 단축 평가
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||을 사용했을때 좌측이 true면 좌측 값 반환
 * ||을 사용했을때 좌측이 false면 우측 값 반환
 */


/**
 * null 연산자
 * 
 */
let name;

name = name ?? '이름';
console.log(name);