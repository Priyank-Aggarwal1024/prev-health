
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Home, NotFound } from './pages'
import { Footer, Navbar } from './components'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app w-full h-full min-h-screen">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
