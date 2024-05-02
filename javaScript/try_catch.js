/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지 할때 -> 잡는다고 한다. (catch)
 */

    function runner() {
        try{
            console.log('Hello!!');     
            
            throw new Error('에러 발생');
    
            console.log('World!!'); 

        } catch (e) {
            console.log('---catch---');
            console.log(e);
        } finally {
            console.log('---finally---');
        }

    }

    runner();