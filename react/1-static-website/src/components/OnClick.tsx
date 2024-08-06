import { toast } from 'sonner'

export default function OnClick() {
    let count: number = 0

    const handleClick = () => {
        toast('My first toast')
    }

    const handleClick2 = (name: string) => {
        toast(`Hey whats up ${name}!`)
    }

    const handleClick3 = (name: string) => {
        if (count < 3) {
            count++
            toast(`Yo ${name}! You clicked me ${count} times`)
        } else {
            toast('Stop clicking me!')
        }
    }

    const handleClick4 = (e: any) => {
        e.target.innerText = 'Ouch! 😭'
        toast('Now double click me 😈')
    }

    const handleClick5 = (e: any) => {
        e.target.innerText = 'Daddy Stop! 🥵'
    }

    const handleClick6 = (e: any) => {
        e.target.style.display = 'none'
    }

    return (
        <div className='flex flex-col items-center justify-center space-y-8'>
            <button onClick={handleClick}>Simple Button</button>

            <button onClick={() => handleClick2('React Adept')}>
                Button with Callback
            </button>

            <button onClick={() => handleClick3('Bro')}>
                Button with Callback and Argument
            </button>

            <button
                onClick={(e) => handleClick4(e)}
                onDoubleClick={(e) => handleClick5(e)}
            >
                Click me 😘
            </button>

            <button onClick={(e) => handleClick6(e)}>Ninja Button 🥷</button>
        </div>
    )
}
