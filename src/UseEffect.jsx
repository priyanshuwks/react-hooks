import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from "axios";

function UseEffect() {
  const [id, setId] = useState(1)
  return (
    <>

        
        <button onClick={() => setId(1)}>1</button>
        <button onClick={() => setId(2)}>2</button>
        <button onClick={() => setId(3)}>3</button>
        <button onClick={() => setId(4)}>4</button>
        <FetchByTodoId id={id} />
        
    </>
  )
}

function FetchByTodoId({id}){
    const [todo, setTodo] = useState("");
    useEffect(function(){
        console.log(`executing useeffect`)
        axios.get(`https://sum-server.100xdevs.com/todo/?id=${id}`)
        .then(function(res){
            console.log('res came');
            setTodo(res.data.todo);
        })
    },[todo]);
    return (
        <>
            {id}
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </>
    )
}

export default App
