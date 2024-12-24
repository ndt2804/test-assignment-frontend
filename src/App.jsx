import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/default'
import Home from './pages/home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {

  return (
    <>
      <main className='h-screen'>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
