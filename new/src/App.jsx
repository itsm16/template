import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
  return (
  <>
    <Nav/>
    <div className='outlet'> 
      <Outlet/>
      {/* placed Outlet inside another div with classname="outlet" so this div can be styled
      and accordingly the content in outlet should be styled so that content coming from outlet component properly fits
      inside this div with classname = "outlet" 

      and in this way if content or outlet can't be styled, div with classname= "outlet" can be styled i.e height, width 
      and according to this div in which outlet is placed , content passed in outlet can be styled so it perfectly fits inside this div
      without any overflow
      
      */}
    </div>
  </>
  )
}