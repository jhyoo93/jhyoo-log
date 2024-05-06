/**
 * Static Keyword
 */

    // class sportModel {
    //     name;
    //     year;
    //     static teamName = 'korea';

    //     constructor(name, year) {
    //         this.name = name;
    //         this.year = year;
    //     }

    //     static returnTeamName(){
    //         return 'korea';
    //     }
    // }

    // const son = new sportModel('손흥민', 1993);
    // console.log(son);
    // console.log(sportModel.returnTeamName());

    /**
     *  factory constructor
     */
    class sportModel {
        name;
        year;

        constructor(name, year){
            this.name = name;
            this.year = year;
        }

        static fromObject(object) {
            return new sportModel(
                object.name,
                object.year,    
            );
        }

        static fromList(list) {
            return new sportModel(
                list[0],
                list[1],
            );
        }

    }

    const son = sportModel.fromObject({
        name: '손흥민',
        year: 2003,
    });
    
    console.log(son);

    const lee = sportModel.fromList(
        [
            '손흥민', 
            2003,
        ]
    );

    console.log(lee);