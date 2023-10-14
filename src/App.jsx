import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Docs from './routes/Docs'

export default function App() {
  return (
  <>
    <Nav/>
    <Routes>
      <Route path='/docs' element={<Docs/>} />
    </Routes>
    
  </>
  )
}

