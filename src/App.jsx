import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStation from './components/AddStation'
import ViewStation from './components/ViewStation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStation/>}/>
        <Route path='/view' element={<ViewStation/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
