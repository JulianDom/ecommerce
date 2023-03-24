import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash background'>
        <div className='heading f_flex'>
          <i className='fa fa-bolt' />
          <h1>Flash Deals</h1>
        </div>
        <div className='container f_flex'>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}
export default FlashDeals
