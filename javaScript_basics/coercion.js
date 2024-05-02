/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

    // 명시적
    let age = 32;
    let stringAge = age.toString();

    console.log(typeof (99).toString);
    console.log(typeof (true).toString);
    console.log(typeof (Infinity).toString);

    // 암묵적
    let test = age + '';
    console.log(typeof test, test);

    console.log('98' + 2); // 982  
    console.log('98' * 2); // 196
    console.log('98' - 2); // 96

    // 숫자 타입 변환
    console.log(typeof parseInt('0'), parseInt('0'));
    console.log(typeof parseFloat('0.99'), parseInt('0.99'));
    console.log(typeof +'1', +'1');


    // Boolean 타입으로 변환
    onsole.log(!!'x');