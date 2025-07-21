import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);

    useEffect(() => {
        console.log("We Are learning UseEffect in React");
    }, [] );


    return (
        <>
            <p className='text-center font-bold bg-blue-400 text-white'>Use Effect Hook</p>
            <p className='font-bold '>The Count value is: {count} </p>
            <button onClick={() => setCount(count + 1)} className='bg-blue-700 text-white px-10 py-2'>Increrment</button>

            <p className='font-bold'>The data value is: {data} </p>
            <button onClick={() => setData(data - 1)} className='bg-red-700 text-white px-10 py-2'>Decrement</button>
        </>
    )
}

export default UseEffect
