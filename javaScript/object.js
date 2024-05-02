/**
 *  Object / 객체
 */

    // key : value pair
    let obj = {
        name: '장원영',
        groop: '아이브', 
        dance: function() {
            return `${this.name}이 춤을 춥니다.`;
        }
    }

    console.log(obj);
    console.log(obj.name);
    console.log(obj['name']);

    const key = 'name';
    console.log(obj[key]);
    console.log(obj.dance());

    const nameKey = 'name';
    const nameValue = '장원영';

    const groupKey = 'group';
    const groupValue = '아이브';

    const obj2 = {
        [nameKey]: nameValue,
        [groupKey]: groupValue,
        dance: function() {
            return `${this.name}이 춤을 춥니다.`;
        }
    }

    console.log(obj2);
    console.log(obj2.dance());

    obj2['group'] = '그룹명 변경';
    console.log(obj2);

    obj2['engName'] = 'Jang Won Young';
    console.log(obj2);

    delete obj2['engName'];
    console.log(obj2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

    const wonYoung = {
        name: '장원영',
        group: '아이브',
    }

    console.log(wonYoung);

    //wonYoung = {};
    wonYoung['group'] = 'IVE';
    console.log(wonYoung);


    /**
     *  모든 key값 다 가져오기
     */
    console.log(Object.keys(wonYoung));

    /**
     *  모든 value값 다 가져오기
     */
    console.log(Object.values(wonYoung));


    const name = '안유진';

    const yuJin3 = {
        name,
    };

    console.log(yuJin3);