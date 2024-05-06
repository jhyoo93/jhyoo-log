/**
 * Super and Override
 */

    class IdolModel {
        name;
        year;

        constructor(name, year) {
            this.name = name;
            this.year = year;
        }

        sayHello() {
            return `안녕하세요 ${this.name}입니다.`;
        }
    }

    class FemaleIdolModel extends IdolModel {
        
        part;

        constructor(name, year, part) {
            super(name, year);
            this.part = part;
        }

        sayHello() {
            return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
        }
    }

    const yujin = new FemaleIdolModel('안유진', 2003, '보컬');
    console.log(yujin);

    const wonYoung = new IdolModel('안유진', 2002);
    console.log(wonYoung.sayHello());
    console.log(yujin.sayHello());

    /*****************************************************************************/ 

    const iveMembers = [
        {
            name: '안유진',
            year: 2003,
        },
        {
            name: '장원영',
            year: 2002,
        },
        {
            name: '안유진',
            year: 2003,
        },
        {
            name: '리즈',
            year: 2001,
        },
        {
            name: '이서',
            year: 2005,
        },
    ]

    const btsMembers = [
        {
            name: '진',
            year: 1992,
        },
        {
            name: '슈가',
            year: 1993,
        },
        {
            name: '제이홉',
            year: 1994,
        },
        {
            name: '정국',
            year: 2004,
        },
    ]


    class Country {
        name;
        idolGRoups;

        constructor(name, idolGRoups) {
            this.name = name;
            this.idolGRoups = idolGRoups;
        }
    }

    class IdolGroup {
        name;
        members;

        constructor(name, members) {
            this.name = name;
            this.members = members;
        }
    }

    class Idol {
        name;
        year;

        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
    }

    class FemaleIdol extends Idol {
        sing() {
            return `${this.name}이 노래를 합니다.`;
        }
    }

    class MaleIdol extends Idol {
        dance() {
            return `${this.name}이 춤을 춥니다.`;
        }
    }

    const allGroup = new Country (
        '대한민국',
        [
            new IdolGroup(
                'IVE',
                iveMembers.map(
                    (x) => new FemaleIdol(x['name'], x['year'])
                ),
            ),

            new IdolGroup(
                'BTS',
                btsMembers.map(
                    (x) => new MaleIdol(x['name'], x['year'])
                ),
            ),

        ],

    );

    console.log(allGroup);
 
