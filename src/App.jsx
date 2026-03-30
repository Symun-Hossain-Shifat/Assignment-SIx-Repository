
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Count from './Components/Count'
import Mainsection from './Components/Mainsection'
import Navbar from './Components/Navbar'
import Started from './Components/Started'
import Pricing from './Components/Pricing'
import Workflow from './Components/Workflow'
import Footer from './Components/Footer'


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
    <Started></Started>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>
   
    
    </>


  )
}

export default App
