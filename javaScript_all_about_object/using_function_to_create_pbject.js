/**
 * Using function to create objects
 */

    function IdolModel(name, year) {
        if(!new.target) {
            return new IdolModel(name, year);
        }

        this.name = name;
        this.year = year;

        this.dance = function() {
            return `${this.name}이 춤을 춥니다.`;
        }
    }

    const yujin = new IdolModel('안유진', 2003);
    console.log(yujin);
    // console.log(yujin.dance());
    // console.log(global.name);
    const yujin2 = IdolModel('안유진', 2003);
    console.log(yujin2);

    // new 키워드는 일반 function에서만 사용가능하다 arrow 함수에서 사용불가
    const IdolModelArrow = (name, year) => {
        this.name = name;
        this.year = year;
    }