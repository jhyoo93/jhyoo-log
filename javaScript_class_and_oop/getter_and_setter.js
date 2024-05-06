/**
 * Getter and Setter
 */

    class sportModel {
        name;
        year;

        constructor (name, year){
            this.name = name;
            this.year = year;
        } 

        /**
         *  1) 데이터를 가공해서 새로운 데이터를 반환할때
         *  2) private한 값을 반환할때
         */
        get nameAndYear() {
            return `${this.name}-${this.year}`;
        }

        set setName(name) {
            this.name = name;
        }
    }

    const son = new sportModel('손흥민', 2000);
    console.log(son);
    console.log(son.nameAndYear);

    son.setName = '이강인';
    console.log(son);

    class IdolModel {
        #name; //private
        year;

        constructor(name, year) {
            this.#name = name;
            this.year = year;
        }

        // getter를 통해 private설정한 값을 가져올수있다.
        get name() {
            return this.#name;
        }

        set name(name) {
            this.#name = name;
        }
    }

    const yujin = new IdolModel('안유진', 2003);
    console.log(yujin);
    console.log(yujin.name);

    yujin.name = '장원영';
    console.log(yujin.name);