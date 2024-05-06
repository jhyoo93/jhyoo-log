/**
 * Class Keyword
 */

    class sportModel {
        // name;
        // year;

        constructor(name, year) {
            this.name = name;
            this.year = year;
        }

        sayName() {
            return `안녕하세요 ${this.name} 입니다.`;
        }
    }

    // this는 new 키워드를 이용해 생성되는 인스턴스를 가르킨다. 
    // constructor - 생성자

    const son = new sportModel('손흥민', 2000);
    console.log(son);

    const lee = new sportModel('이강인', 2004);
    console.log(lee);

    console.log(son.name);
    console.log(son.year);

    console.log(lee.sayName());

    console.log(typeof sportModel);