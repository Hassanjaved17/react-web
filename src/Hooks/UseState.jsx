import React from 'react'
import { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0);


  return (
    <>
      <p className='text-center font-bold text-white bg-blue-400'>Use State Hook</p>
      <p className='font-bold '> My state value is: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)} className='bg-blue-700 text-white px-10 py-2'>Increrment</button>
      <br/>
      <br />
      <button onClick={() => setCount(count - 1)} className='bg-red-700 text-white px-10 py-2'>Decrement</button>
      
      {/* <button onClick={() => setCount(count*1)} className='bg-green-500 text-white px-10 py-10'>Multiplication </button> */}
    </>
  )
}

export default UseState
