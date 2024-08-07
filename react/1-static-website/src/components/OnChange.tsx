// OnChange() is a function that is called when the value of an element changes.
// Example: When a user types in a text field, the OnChange() function is called.
// Example: When a user selects a radio button, the OnChange() function is called.
// Example: When a user selects a checkbox, the OnChange() function is called.

import { useState } from 'react'

export default function OnChange() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState('')
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('standard')

    function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuantity(Number(e.target.value))
    }

    function handleCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setComment(e.target.value)
    }

    function handlePaymentChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setPayment(e.target.value)
    }

    function handleShippingChange(e: React.ChangeEvent<HTMLInputElement>) {
        setShipping(e.target.value)
    }

    return (
        <>
            <div className='mb-24'>
                <h1>Example 1</h1>
                <div className='box'>
                    <h2>Input</h2>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='mb-4 i'
                    />
                    <button onClick={() => setName('')}>Clear</button>
                </div>

                <div className='box  '>
                    <h2>Output</h2>
                    <p>{name}</p>
                </div>
            </div>

            <div className='mb-24'>
                <h1>Example 2</h1>
                <div className='box'>
                    <h2>Input</h2>
                    <input
                        type='number'
                        value={quantity}
                        onChange={handleQuantityChange}
                        className='i mb-4'
                    />
                    <button onClick={() => setQuantity(0)}>Clear</button>
                </div>

                <div className='box  '>
                    <h2>Output</h2>
                    <p>{quantity}</p>
                </div>
            </div>

            <div className='mb-24'>
                <h1>Example 3</h1>
                <div className='box'>
                    <h2>Input</h2>
                    <textarea
                        value={comment}
                        placeholder='Enter your comment here...'
                        onChange={handleCommentChange}
                        className='i mb-4'
                    />

                    <button onClick={() => setComment('')}>Clear</button>
                </div>

                <div className='box  '>
                    <h2>Output</h2>
                    <p>{comment}</p>
                </div>
            </div>

            <div className='mb-24'>
                <h1>Example 4 </h1>
                <div className='box'>
                    <h2>Input</h2>
                    <select
                        value={payment}
                        onChange={handlePaymentChange}
                        className='i mb-4'
                    >
                        <option value=''>Select Payment Method</option>
                        <option value='visa'>Visa</option>
                        <option value='mastercard'>MasterCard</option>
                        <option value='paypal'>Paypal</option>
                    </select>

                    <button onClick={() => setPayment('')}>Clear</button>
                </div>

                <div className='box  '>
                    <h2>Output</h2>
                    <p>{payment}</p>
                </div>
            </div>

            <div className='mb-24'>
                <h1>Example 4 </h1>
                <div className='box'>
                    <h2>Input</h2>
                    <label className='radio mb-4'>
                        <input
                            className='mr-2 accent-fuchsia-600'
                            type='radio'
                            name='shipping'
                            value='standard'
                            checked={shipping === 'standard'}
                            onChange={handleShippingChange}
                        />
                        Standard Shipping
                    </label>

                    <label className='radio mb-4'>
                        <input
                            className='mr-2 accent-fuchsia-600'
                            type='radio'
                            name='shipping'
                            value='express'
                            checked={shipping === 'express'}
                            onChange={handleShippingChange}
                        />
                        Express Shipping
                    </label>

                    <label className='radio mb-4'>
                        <input
                            className='mr-2 accent-fuchsia-600'
                            type='radio'
                            name='shipping'
                            value='pickup'
                            checked={shipping === 'pickup'}
                            onChange={handleShippingChange}
                        />
                        Pickup
                    </label>

                    <button onClick={() => setShipping('')}>Clear</button>
                </div>

                <div className='box  '>
                    <h2>Output</h2>
                    <p>Selected shipping method: {shipping}</p>
                </div>
            </div>
        </>
    )
}
