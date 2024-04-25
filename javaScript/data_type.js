/**
 * 
 * Data type
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있다.
 * 
 * 
 * 1) Numbar
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object (객체)
 */

const age = 32;
const tempature = -10;
const pi = 3.14;


/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현 할때는 두번 입력하면 된다.
 */

const str = '줄바꿈\n테스트';
console.log(str);

const str2 = '줄바꿈\t테스트';
console.log(str2);

const str3 = '줄바꿈\\테스트';
console.log(str3);


/**
 * Undefined
 * 
 * 사용자가 값을 초기화하지 않았을때
 * 지정되는 값.
 * 
 * 직접 undefined 값을 초기화하는건 지양해야한다.
 */

let noInit; // undefined

/**
 *  null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS 에서는 개발자가 명시적으로 없는 값으로 초기화할떄
 * 사용된다.
 */
let init = null;

/**
 *  Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

/**
 *  Object 타입
 * 
 * Map 형태
 * key : value 쌍으로 이루어짐
 */

const dicrionart = {
    red: '빨간색',
    orange: '주황색',
};

/**
 *  Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const arr = [   
    '하나',
    '둘',
    '셋',
    '넷',
    '다섯',
];


/**
 *  index
 * 
 * 0부터 시작한다.
 * 1씩 올라간다.
 */

console.log(arr[0]);


/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에의해  타입을 "추론" 한다.      
 * JS -> dynamic typing      
 */