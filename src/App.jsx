import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HeaderNav from './components/HeaderNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <main className='pt-5 bg-white border-bottom p-3 bg-body-tertiary'>
      <HeaderNav/>
     </main>
    </>
  )
}

export default App
