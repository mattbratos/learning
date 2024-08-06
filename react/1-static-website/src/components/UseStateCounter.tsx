import React, { useState } from 'react'

export default function UseStateCounter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <div className='box'>
                <h2>Count: {count} </h2>
                <div className='flex space-x-4 '>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}
