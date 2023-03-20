import React from 'react'
import Categories from './Categories'
import SlideCard from './SlideCard'

const Home = () => {
  return (
    <div>
       <section className='home'>
        <div className="container d_flex">
          <Categories />
          <SlideCard />
        </div>
       </section>
    </div>
  )
}

export default Home