/**
 * Immutable Object
 * 
 */
    const yujin = {
        name: '안유진',
        year: 2003,
        
        get age() {
            return new Date().getFullYear() - this.year;
        },

        set age(age) {
            this.year = new Date().getFullYear() - age;
        },

    };

    console.log(yujin);

/**
 * Extensible
 */
    console.log(Object.isExtensible(yujin));

    yujin['position'] = '보컬';
    console.log(yujin);

    Object.preventExtensions(yujin);

    console.log(Object.isExtensible(yujin));

    yujin['groupName'] = '아이브';
    console.log(yujin);


/**
 * Seal 
 */    
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

    console.log(yujin2);

    console.log(Object.isSealed(yujin2));

    Object.seal(yujin2);

    console.log(Object.isSealed(yujin2));

    yujin2['groupName'] = '아이브';
    console.log(yujin2);


    Object.defineProperty(yujin2, 'name', {
        value: '장원영',
    });

    console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));

/**
 * Freezed 
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */     
    const yujin3 = {
        name: '안유진',
        year: 2003,
        
        get age() {
            return new Date().getFullYear() - this.year;
        },

        set age(age) {
            this.year = new Date().getFullYear() - age;
        },

    };

    console.log(Object.isFrozen(yujin3));

    Object.freeze(yujin3);
    console.log(Object.isFrozen(yujin3));

    yujin3['groupName'] = '아이브';
    console.log(yujin3);

