
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Count from './Components/Count'
import Mainsection from './Components/Mainsection'
import Navbar from './Components/Navbar'
import Started from './Components/Started'
import Pricing from './Components/Pricing'
import Workflow from './Components/Workflow'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'


function App() {
  const fetchpromise = fetch('data.json').then(res=> res.json())
  const [selected,setSelected] = useState([]);
 

  return (
    <>
    <Navbar selected={selected}></Navbar>
    <Banner></Banner>
    <Count></Count>
    <Suspense fallback={'data is loading.....'}> 
    <Mainsection selected={selected} setSelected={setSelected} fetchpromise={fetchpromise}></Mainsection>
    </Suspense>
    <Started></Started>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>
    <ToastContainer />
   
    
    </>


  )
}

export default App
