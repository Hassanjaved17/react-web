import React, { useState } from 'react';
import ChildB from './ChildB'

const ChildA = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            Child A
            <ChildB name="Hassan" count={count} setCount={setCount} />
        </>
    )
}

export default ChildA
