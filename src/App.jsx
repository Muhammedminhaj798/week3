import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.delete("http://localhost:3000/users/2",{
        title: "change to patch method",
        
      })
      .then((resullt)=>{
        console.log(resullt);
        
      })
    }
    fetchData()
  })

  return(
    <>
    <ol>
      {data.map((post)=>(
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
    </>
  )
}

export default App
