import React from 'react'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

const App = () => {

  const [input, setInput] = useState("car")
  const [data, setData] = useState([])

  useEffect(()=>{
    
    getData()
    
  

  },[input])




  let Api_Key = "20XUgpS97eJOnP484SVASAwbYy-ABwoMDDuuG-8B3E8"

  const getData = async() =>{
    

    try{

      
      const response = await fetch(`https://api.unsplash.com/search/photos/?query=${input}&client_id=${Api_Key}`)
      const data = await response.json()
      console.log(data.results)
      setData(data.results)
      

    }
    catch(error){
      console.log(error);
    }
  } 
  return (
    <div className='container'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        getData()
      }}>

      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search" class="input" name="text"/>

        
        <button>Search</button>
      </form>

      <div className="images">
          {data.map((result) => (
          // <div className='row'>
          <div className="col" key={result.id}>
            <img src={result.urls.small} alt={result.alt_description} />
            
          </div>

        
        ))}
          </div>
    </div>
  )
}

export default App



