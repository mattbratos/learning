// src/pages/RenderingPage.tsx

import List from '../components/List'
import { v4 as uuidv4 } from 'uuid'

function RenderingPage() {
    type Fruit = {
        id: string
        name: string
        calories: number
    }

    const fruits: Fruit[] = [
        { id: uuidv4(), name: 'apple', calories: 95 },
        { id: uuidv4(), name: 'banana', calories: 105 },
        { id: uuidv4(), name: 'orange', calories: 62 },
        { id: uuidv4(), name: 'grapes', calories: 62 },
        { id: uuidv4(), name: 'kiwi', calories: 42 },
        { id: uuidv4(), name: 'strawberry', calories: 45 },
        { id: uuidv4(), name: 'blueberry', calories: 57 },
        { id: uuidv4(), name: 'watermelon', calories: 30 },
        { id: uuidv4(), name: 'mango', calories: 202 },
        { id: uuidv4(), name: 'pineapple', calories: 83 },
    ]

    const vegetables = [
        { id: uuidv4(), name: 'carrot', calories: 41 },
        { id: uuidv4(), name: 'broccoli', calories: 55 },
        { id: uuidv4(), name: 'spinach', calories: 23 },
        { id: uuidv4(), name: 'lettuce', calories: 5 },
        { id: uuidv4(), name: 'cucumber', calories: 45 },
        { id: uuidv4(), name: 'tomato', calories: 22 },
        { id: uuidv4(), name: 'onion', calories: 40 },
        { id: uuidv4(), name: 'garlic', calories: 149 },
        { id: uuidv4(), name: 'potato', calories: 77 },
        { id: uuidv4(), name: 'sweet potato', calories: 86 },
    ]

    return (
        <>
            <h1>Conditional Rendering</h1>
            {fruits.length > 0 && (
                <List
                    items={fruits}
                    category='fruits'
                />
            )}
            {vegetables.length > 0 && (
                <List
                    items={vegetables}
                    category='vegetables'
                />
            )}
        </>
    )
}

export default RenderingPage
