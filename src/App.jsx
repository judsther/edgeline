
//import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Services } from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import { AboutUs } from './pages/AboutUs/AboutUs'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route path='/' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/about-us' element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
