/**
 * If and Switch
 */

let number = 5;

if(number % 2 === 0) { 
    console.log('number 변수는 짝수 입니다.');
} else {
    console.log('number 변수는 홀수 입니다.');
}

if(number % 2 === 0) { 
    console.log('2의 배수 입니다.');
} else if(number % 3 === 0) {
    console.log('3의 배수 입니다.');
} else if(number % 4 === 0) {
    console.log('4의 배수 입니다.');
} else if(number % 5 === 0) {
    console.log('5의 배수 입니다.');
} else {
    console.log('2, 3, 4, 5의 배수가 아닙니다.');
}

/**   ==============================   */
const englishDay = 'monday';

let KoreanDay;

switch(englishDay) {
    case 'monday':
        KoreanDay = '월요일';
        break;
    case 'tuesday':
        KoreanDay = '화요일';
        break;
    case 'wednesday':
        KoreanDay = '수요일';
        break; 
    case 'thursday':
        KoreanDay = '목요일';
        break;
    case 'friday':
        KoreanDay = '금요일';
        break;                       
}

console.log(KoreanDay);