/* eslint-disable no-unused-vars */
import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pages from './pages/Pages'
import Data from './components/flashDeals/Data'
import Cart from './common/cart/Cart'
import { useState } from 'react'

function App () {
  const { productItems } = Data
  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
        (item.id === product.id
          ? { ...productExit, qty: productExit.qty + 1 }

          : item)))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const descraseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <div>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} />} exact />
        </Routes>
        <Routes>
          <Route path='/Cart' element={<Cart cartItem={cartItem} addToCart={addToCart} descraseQty={descraseQty} />} exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App
