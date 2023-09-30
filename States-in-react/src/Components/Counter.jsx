// import { useState } from 'react'
import { useState } from 'react'
import React from 'react'



const Counter = () => {

  //  usestate
  const [counter, setCounter] = useState(0)

  //  useeffect


  //  funtion
  
  const increment=()=>{

    if(counter<=19){

      setCounter(counter+1)
    }
    else{
      alert('Bas krja Bosdike')
    }
  }
  const decrement=()=>{

    if(counter>=1){

      setCounter(counter-1)
    }
    else{
      alert('Bas krja Bosdike')
    }
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <div><h1>{counter}</h1></div>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
