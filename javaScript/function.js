/**
 * function -> 함수
 */


    function calculate(num) {
        //console.log((num * 10 / 2 % 3).toString());
    }


/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 Argument라고 한다.
 */
    calculate(4);

    function multiply(x, y = 10) {
        console.log(x * y);
    }

    multiply(2);

    // defalt 파라미터
    function multiply(x, y = 10) {
        console.log(x * y);
    }

    multiply(2);

/**
 * return 받기 
 */
    function multiply(x, y) {
        return x * y;
    }

    const result1 =  multiply(2, 4);
    console.log(result1);

/**
 *  Arrow 함수
 */

    const multiply2 = (x, y) => {
        return x * y;
    }

    console.log(multiply2(3, 4));

    // 파라 미터 2개일경우 문법 축소
    const multiply3 = (x, y) => x * y;
    
    console.log(multiply3(3, 4));

    // 파라 미터 1개일경우 문법 축소
    const multiply4 = x => x * 2;
    
    console.log(multiply4(3));
