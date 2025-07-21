import React from 'react'

const ChildB = ({ name, count, setCount }) => {

    const increment = () => {
        setCount(count + 1);
    }

    const clear = () => {
        setCount(0);
    }

    return (
        <>
            {name}
            <p className='bg-gray-500 text-white'>  The value of count is {count}</p>
            <button className='bg-blue-700 text-white px-2 py-1.5' onClick={increment}>Add</button>
            <button className='bg-green-500 py-1.5 px-2 text-white' onClick={clear}>Clear </button>
        </>
    )
}

export default ChildB
