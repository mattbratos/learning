// src/components/Header.tsx

import { Link } from 'react-router-dom'
import { config } from '../config/config'

export default function Header() {
    return (
        <header>
            <div className=' mx-auto'>
                <div className='flex items-center justify-between h-16 mb-8'>
                    <Link
                        to='/'
                        className='text-4xl text-white font-bold'
                    >
                        React App
                    </Link>
                    <nav>
                        <ul className='flex space-x-4'>
                            {config.map((item, index) => (
                                <li
                                    className='list-none'
                                    key={index}
                                >
                                    <Link
                                        to={item.path}
                                        className='py-2 px-3 hover:bg-gray-700 rounded transition duration-300'
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
