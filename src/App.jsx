import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Docs from './routes/Docs'

export default function App() {
  return (
  <>
    <Nav/>
    <div className='outlet'>
      <Outlet/>
    </div>
  </>
  )
}

