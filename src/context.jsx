import React, { createContext, useState } from 'react'
import Component2 from './Component2'
import Component3 from './component3'


export const userContext = createContext()
function Context() {
  const [count, setCount] = useState(0)
  return(
    <div>
      <userContext.Provider>
        <Component2 value={{count,setCount}}/>
        <Component3 value={{count,setCount}}/>
      </userContext.Provider>
    </div>
  )
    
}

export default Context
