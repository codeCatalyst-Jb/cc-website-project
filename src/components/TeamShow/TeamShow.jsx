import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TeamShow.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const TeamShow = () => {
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
        className="mySwiper w-[50vw]"
      >
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-zinc-800 flex box '>
         <div className=" w-[50%] h-[100%] flex justify-center items-center  "> img of team member</div>
         <div className="text  w-[50%] h-[100%] flex justify-center items-center flex-col">
          <h2>Name</h2>
          <h3>Designation</h3>
          <h4>Course</h4>
          <div className="social-profiles">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Portfolio</a>
          </div>
         </div>
        </SwiperSlide>
        
      </Swiper>

   </>
  )
}

export default TeamShow
