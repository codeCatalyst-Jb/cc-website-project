import React from 'react'
import Img1 from '../../assets/cclogo2-.png'
import  './Card.css'

const Card = () => {
  return (
    <>
    <div className="card ">
        <div className="img flex justify-center items-center">
          <img src={Img1} alt=""  className='w-6/12'/>
        </div>
        <div className="text text-gray-400">
        
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae ratione laborum sapiente veritatis vel ipsam consectetur aliquid laudantium eaque, delectus dicta facilis, neque in natus tempore velit nemo accusantium.</p>
      <button className='text-blue-400 border px-1 py-2 rounded-xl my-2 mx-8'>Read More</button>

        </div>
      </div>
          </>
  )
}

export default Card
