/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

    let original = '안녕하세요';
    let clone = original;

    console.log(original);
    console.log(clone);

    console.log('==============================================================');

    clone += ' 장원영 입니다.'
    console.log(original);
    console.log(clone);

    let originalObj = {
        name: '장원영',
        group: '아이브',
    };

    let cloneObj = originalObj;

    console.log(originalObj);
    console.log(cloneObj);

    console.log('==============================================================');

    originalObj['group'] = 'IVE';
    console.log(originalObj);
    console.log(cloneObj);


/**
 *  Spread Operator
 */
    
    const str = {
        ...originalObj,
    };
    console.log(str);
    // false
    console.log(str === originalObj);


    const str2 = {
        year: 2024,
        ...originalObj,
    };
    console.log(str2);

    const str3 = {
        name: '테스트',
        ...originalObj,
    };
    console.log(str3);

    const str4 = {
        ...originalObj,
        name: '테스트',
    };
    console.log(str4);