// src/config/config.ts

import HomePage from '../pages/HomePage'
// import FeedPage from '../pages/FeedPage' // Import FeedPage if it exists
// import ButtonPage from '../pages/ButtonPage' // Import ButtonPage if it exists
import CardPage from '../pages/CardPage'
// import StudentPage from '../pages/StudentPage' // Import StudentPage if it exists
import RenderingPage from '../pages/RenderingPage'
import OnClickPage from '../pages/OnClickPage'
import UseStatePage from '../pages/UseStatePage'

// Define the type for route items
interface RouteItem {
    name: string
    path: string
    element: React.ComponentType
}

// Unified configuration array
export const config: RouteItem[] = [
    { name: 'Home', path: '/', element: HomePage },
    // { name: 'Feed', path: '/feed', element: FeedPage },
    // { name: 'Button', path: '/button', element: ButtonPage },
    { name: 'Card', path: '/card', element: CardPage },
    // { name: 'Student', path: '/student', element: StudentPage },
    { name: 'Rendering', path: '/rendering', element: RenderingPage },
    { name: 'OnClick', path: '/onclick', element: OnClickPage },
    { name: 'UseState', path: '/usestate', element: UseStatePage },
]
//UseState
