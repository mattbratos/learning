import React, { useState } from 'react'

export default function UseStateBasics() {
    const [name, setName] = useState('guest')
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName('John Doe')
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <>
            <div className='box'>
                <h2>Basic UseState() Usage</h2>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
            </div>

            <div className='box'>
                <h2>UseState() With Number</h2>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
            </div>

            <div className='box'>
                <h2>UseState() With Bool</h2>
                <p>
                    Employment Status:{' '}
                    {isEmployed ? 'Employed' : 'Startup Founder'}
                </p>
                <button onClick={toggleEmployment}>Toggle Employment</button>
            </div>
        </>
    )
}
