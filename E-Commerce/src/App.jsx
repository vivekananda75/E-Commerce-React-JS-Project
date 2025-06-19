import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Curoselslider from './pages/Curoselslider'
import Service from './pages/Service'
import Discount from './pages/Discount'
import Newarraivals from './pages/Newarraivals'
import Bestsales from './pages/Bestsales'
import Footer from './components/Footer'
import Navigation from './Routing/Navigation'

function App() {

  return (
    <>
      <div>
       
        <Header/>
        <Navigation/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
