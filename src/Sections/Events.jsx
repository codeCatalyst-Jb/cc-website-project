import React from 'react'
import Gallery from '../components/Gallery/Gallery.jsx'
import EventSlider from '../components/EventSlider/EventSlider.jsx';


const Events = () => {
  return (
    <>
  <h2  className=' text-center text-4xl font-bold text-blue-500'> Our Events</h2>
<EventSlider/>

  <h2 className='text-blue-200 text-center text-4xl text-bold'> Glimpse of Events</h2>
  <Gallery/>
    </>
  )
}

export default Events
