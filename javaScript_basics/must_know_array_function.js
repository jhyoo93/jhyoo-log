/**
 * Array funtions
 *
 */

    let arrayStr = [
        '손흥민',
        '이강인',
        '김민재',
        '조규성', 
    ]

    // push() 마지막 인덱스에 element를 추가한다
    arrayStr.push('설영우');
    console.log(arrayStr);
   
    // pop() 마지막 element를 삭제하고 그값을 반환해준다
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.pop());
    console.log(arrayStr);

    // shift() 첫번째 element를 삭제하고 그값을 반환해준다
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.shift());
    console.log(arrayStr);

    // unshift() 첫번째 element를 추가한다
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.unshift('손흥민'));
    console.log(arrayStr);

    // splice() 인덱스 번호 element를 삭제후 반환해준다
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.splice(0,3));
    console.log(arrayStr);

    arrayStr = [
        '손흥민',
        '이강인',
        '김민재',
        '조규성', 
    ]

    // concat() 새로운 array를 만들어서 element를 추가후 반환해준다
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.concat('설영우'));
    console.log(arrayStr);

    // slice() 새로운 array를 만들어서 element를 삭제후 반환해준다
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.slice(0,2));
    console.log(arrayStr);
    
    // spread operator
    let arrayStr2 = [
        ...arrayStr,
    ]
    console.log('------------------------------------------------------------------');
    console.log(arrayStr2);

    // join() , 기준으로 string으로 반환
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.join());
    console.log(arrayStr.join('/'));
    console.log(arrayStr.join(', '));

    // sort() 오름차순으로 정렬
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.sort());

    // reverse() 내림차순으로 정렬
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.reverse());

    let numbers = [
        1,
        9,
        7,
        5,
        3,
    ];

    // a,b를 비교했을때
    // 1) a를 b보다 나중에 정렬하려면 0보다 큰 숫자를 반환
    // 2) a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
    // 3) 원래 순서를 그대로 두려면 0을 반환
    numbers.sort((a,b) => {
        return a > b ? 1: -1;
        //return a > b ? -1: 1;
    });
    console.log(numbers);

    // map() array값들을 순회하면서 변형 시켜 새로운 array를 반환 해준다
    console.log('------------------------------------------------------------------');
    console.log(arrayStr.map((x) => `korea: ${x}` ));

    console.log(arrayStr.map((x) => {
        if(x === '손흥민'){
            return `korea: ${x}`;
        } else {
            return x;
        }
    }));

    // filter()
    // true를 반환하면 해당 값을 킵하게 된다
    // false를 반환하면 해당 값을 킵하지 않는다.
    numbers = [1, 8, 7, 6, 3];
    console.log(numbers.filter((x) => x % 2 === 0));


    // find()
    console.log(numbers.find((x) => x % 2 === 0));

    // findIndex()
    console.log(numbers.findIndex((x) => x % 2 === 0));

    // reduce()
    console.log(numbers.reduce((p, n) => p + n, 0));