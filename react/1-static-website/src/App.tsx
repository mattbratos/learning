// src/App.tsx
//

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

import Header from './components/Header'
// import Footer from './components/Footer';
import { config } from './config/config'

function App() {
    return (
        <Router>
            <div className='flex flex-col min-h-screen'>
                <Toaster />
                <Header />
                <main className='flex-grow'>
                    <Routes>
                        {config.map((route, index) => (
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
