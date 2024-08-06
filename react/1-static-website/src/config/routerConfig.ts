// config/routerConfig.ts
import HomePage from '../pages/HomePage'
import CardPage from '../pages/CardPage'
import RenderingPage from '../pages/RenderingPage'

interface RouteConfig {
    path: string
    element: React.ComponentType
}

const routes: RouteConfig[] = [
    { path: '/', element: HomePage },
    { path: '/card', element: CardPage },
    { path: '/rendering', element: RenderingPage },
]

export default routes
