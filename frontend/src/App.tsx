import './App.css'
import Tab from './components/Tab'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';

function App() {
  

  return (
    <div className='flex flex-col justify-center items-center min-h-fit'>
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes> */}
      <div className="w-[80%] m-2 fixed top-0 z-10">
        <Navbar></Navbar>
      </div>
      <Hero/>
      <Tab></Tab>

    </div>
  )
}

export default App
