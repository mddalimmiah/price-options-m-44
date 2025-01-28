
// import { LineChart } from 'recharts'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
// import DaisyNavbar from './components/DaisyNavbar/DaisyNavbar'


function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <h1 className='text-7xl bg-rose-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>

      


      
      
    </>
  )
}

export default App
