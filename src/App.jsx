import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (
    <>
      <div className="App flex bg-gray-600 w-full h-auto justify-center">
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
