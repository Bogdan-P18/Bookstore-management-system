import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { MainPage } from './components/MainPage'
import { BookPurchasePage } from './components/BookPurchasePage'
import { Register } from './components/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/books" element={ <MainPage /> } />
        <Route path="/book/:id" element={ <BookPurchasePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
