import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { ContextGlobal } from './Context/global.context'
import './App.css'

function App() {
  const {
    state: { isDark},
  } = useContext(ContextGlobal);

  return (
    <div className={isDark ? "dark": ""}>
      <div className='App'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
