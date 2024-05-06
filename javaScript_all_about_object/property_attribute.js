/**
 * Property Attritube
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                     설정할때 호출되는 함수로 구성된 프로퍼티
 *                     예를 들면 geeter와 seeter
 */

    const yujin = {
        name: '안유진',
        year: 2003,
    };

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 */

    console.log(Object.getOwnPropertyDescriptors(yujin));

    const yujin2 = {
        name: '안유진',
        year: 2003,
        
        get age() {
            return new Date().getFullYear() - this.year;
        },

        set age(age) {
            this.year = new Date().getFullYear() - age;
        },

    };
    console.log(yujin2.age);

    yujin2.age = 32;
    console.log(yujin2.age);
    console.log(yujin2.year);

    console.log(Object.getOwnPropertyDescriptor(yujin2, 'age'));

    yujin2['height'] = 172;
    console.log(yujin2);
    console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

    Object.defineProperty(yujin2, 'height', {
        value: 172,
        writable: true,
        enumerable: true,
        configurable: true,
    });

    console.log(yujin2);
    console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));
