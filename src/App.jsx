import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (
    <>
      <div className="App flex bg-gray-600 w-full h-auto justify-center">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/*' element={<h1>Oops, there's nothing more in here...</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
