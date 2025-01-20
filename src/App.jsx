
import { LineChart } from 'recharts'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNavbar from './components/DaisyNavbar/DaisyNavbar'


function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <h1 className='text-7xl bg-rose-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>

      


      
      
    </>
  )
}

export default App
