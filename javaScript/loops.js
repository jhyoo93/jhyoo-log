/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
    for(let i=0; i < 10; i ++) {
        //console.log(i);
    }

    for(let i=10; i > 0; i --) {
        //console.log(i);
    }

    // 다중 loops

    for(let i=0; i < 10; i ++) {
        for(let j=10; j > 0; j--){
            
            //console.log(i, j);
        }
    }

    // * 이용해서 6x6 정사각형을 출력해라

    let squre = '';

    for (let i=0; i < 6; i ++) {
        for(let j=0; j < 6; j++){
            squre += '*';
        }

        squre += '\n';
    }

    //console.log(squre);


/**
 * for...in
 */

    const str = {
        name: '엘루오',
        year: 2024,
    }

    for(let key in str) {
        //console.log(key);
    }

    // ArrayList
    const memberArray = ['손흥민', '이강인', '김민재', '설영우'];

    for(let key in memberArray) {
        //console.log(key);
        //console.log(`${key}:${memberArray[key]}`);
    }


/**
 * for ...of
 */
    for(let value of memberArray) {
        //console.log(value);
    }


/**
 * while
 */   
    let num = 0;

    while(num < 10) {
        num ++;
    }

/**
 * do ...while 사용안함.
 */     
    num = 0;

    do {
        num++;
    } while (num < 10);

/**
 * break
 */ 
    for(let i=0; i < 10; i++){
        if(i === 5){
            break;
        }
        //console.log(i);
    }


    num = 0;

    while(num < 10) {
        if(num === 5){
            break;
        }
        num++;
       // console.log(num);
    }

/**
 * continue
 */ 

    for(let i=0; i < 10; i++){
        if(i === 5){
            continue;
        }
        console.log(i);
    }