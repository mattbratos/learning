import { UserProps } from '../types'

export default function UserYo(props: UserProps) {
    const welcomeMessage = (
        <div className='card box welcome-message'>
            <h1>Yo {props.username}!</h1>
            <p>How are you doing today?</p>
        </div>
    )

    const yoMamaMessage = (
        <div className='card box yomama-message'>
            <h1>Yo! mr unknown</h1>
            <p>How are you doing today?</p>
        </div>
    )

    return props.isLoggedIn ? welcomeMessage : yoMamaMessage
}
