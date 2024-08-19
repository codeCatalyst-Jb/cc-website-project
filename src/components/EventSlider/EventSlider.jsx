import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './EventSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const EventSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-6/12"
      >
        <SwiperSlide className='bg-zinc-800 text-white rounded-m'>Web Development</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>App Development</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>Data structures an Algorithms</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>Esports</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>Cyber Security</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>Videography/Photography</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>Quizes</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>AI & ML</SwiperSlide>
        <SwiperSlide className='bg-zinc-800 text-white rounded-md'>upComing Events</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

    </>
  )
}

export default EventSlider
