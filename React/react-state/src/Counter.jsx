import { useState } from "react"


function Counter(){
    // let count = 0;
    // function incCount(){
    //     count += 1;
    //     console.log(count);

    let [count, setCount] = useState(0);
    console.log("Component is rendered!");
    console.log(`count = ${count}`);

    let incCount = () => {
       setCount(count+1);
       console.log(`inside incCount, count = ${count}`);
    };

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}  
    export default Counter