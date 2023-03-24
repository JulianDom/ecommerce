import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({ productItems }) => (
  <>
    <section className='flash background'>
      <div className='container f_flex'>
        <div className='heading f_flex'>
          <i className='fa fa-bolt' />
          <h1>Flash Deals</h1>
        </div>
        <FlashCard productItems={productItems} />
      </div>
    </section>
  </>
)
export default FlashDeals
