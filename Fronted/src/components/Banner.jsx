import React from 'react'
import house from "../../public/House.jpg"

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
        <h1 className=" text-4xl font-bold -my-5">
            Hello, welcome here to know {""} 
            {/* here is the main header of the website */}
            <span className="text-green-500">your house design!!!</span>
        </h1>
        <p className="text-x1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt id a beatae laborum repudiandae ipsum, fugit quam, quos ullam dolorem reiciendis labore, consectetur iusto! Tenetur, magni vel. Perferendis, ipsam aut?
        </p>
        <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="abn@gmail.com" />
</label>
        </div>
        <button className=" btn mt-6 btn-accent">Accent</button>
        </div>
        <div className="order-1 w-full md :w-1/2 md:mx-8">
       <img src={house} className="w-120 h-110" alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner