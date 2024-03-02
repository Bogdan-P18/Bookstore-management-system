import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { MainPage } from './components/MainPage'
import { BookPurchase } from './components/BookPurchase'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/books" element={ <MainPage /> } />
        <Route path="/book" element={ <BookPurchase />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
