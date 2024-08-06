import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './config/routerConfig'

function App() {
    return (
        <Router>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-grow'>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.element />}
                            />
                        ))}
                    </Routes>
                </main>
                {/* <Footer /> */}
            </div>
        </Router>
    )
}

export default App
