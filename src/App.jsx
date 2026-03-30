
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Count from './Components/Count'
import Mainsection from './Components/Mainsection'
import Navbar from './Components/Navbar'

function App() {
  const fetchpromise = fetch('data.json').then(res=> res.json())
 

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Count></Count>
    <Suspense fallback={'data is loading.....'}> 
    <Mainsection fetchpromise={fetchpromise}></Mainsection>
    </Suspense>
    
    </>


  )
}

export default App
