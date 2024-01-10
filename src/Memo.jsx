import { useState, useEffect, useMemo } from "react"


export default function Memo(){
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [text, setText]  = useState(0);
    function handleChange(e){
        console.log(e.target.value)
        setText(e.target.value)
    }
    //1 This approach: when count changes below codes also executes, which
    //  is not required.
    // let total = 0;
    // for(let i = 1; i <= text; ++i){
    //     total = total + i;
    // }


    //2. useEffect Approach : this more optimised than first one but it can be improved.
    // when text state is changed it executes below useEffect code, then total state
    // also gets changed which is causing another render. 1 extra time.
    // Also there is inconsistency because on text state change re-renders happen and
    // total value at that time sliht different.
    /*useEffect(() => {
        let sum = 0;
        for(let i = 0; i <= text; i++){
            sum = sum + i;
        }
        console.log('change on count change')
        setTotal(sum);
    },[text]); */

    //3. useMemo approach : most optimised
    const sumValue = useMemo(() => {
        let sum = 0;
        for(let i = 0; i <= text; i++){
            sum = sum + i;
        }
        return sum;
    }, [text]);
    return (
        <div>
            <input type="text" onChange={handleChange}/>
            <h3>Sum is {sumValue}</h3>
            <button onClick={() => setCount(count+1)}>Count is: {count}</button>
        </div>
    )
}