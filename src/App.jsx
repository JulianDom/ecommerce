/* eslint-disable no-unused-vars */
import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pages from './pages/Pages'
import Data from './components/flashDeals/Data'
import { useState } from 'react'

function App () {
// stpe 1: fetch data from database

  const { productItems } = Data
  const [cartItem, setCardItem] = useState([])
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} />} exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App
