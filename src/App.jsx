
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

     <Route path='/' element={<Home/>}></Route>
     <Route path='/services' element={<Services/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/about-us' element={<AboutUs/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
