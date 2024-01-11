import { useState, memo, useCallback } from "react"


export default function UseCallback(){
    const [count, setCount] = useState(0);
    let a = useCallback(
        () => console.log('a')
        ,[]);
    return (
        <>
            <button onClick={() => setCount(count+1)}>count ({count})</button>
            <Child prop={a}/>
        </>
    )
}
// when fn is passed to memo it will render the child even if prop is fixed.
// wrapping the child comp. in useCallback() will not re-render when props don't change.
const Child = memo(function ({a}){
    console.log('child rendered');
    return (
        <>

        </>
    )
})

