import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import house from "../../public/House.jpg"
import {Link} from "react-router-dom"
function Course() {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
   <div className="mt-28 items-center justify-center text-center">
    <h1 className= "text-2xl md:text-4xl">
   We are delightened to have you {" "} <span className="text-green-500 font-semibold">here!!</span>
    </h1>
    <p className="mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dolorum dolore saepe sapiente iusto eveniet ex doloribus, reprehenderit blanditiis? Eius ullam eaque velit quasi error voluptatem atque vitae, ab consequuntur!</p>
   <Link to="/">
   <button className="bg-green-400 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 duration-300">Back</button>
   </Link>
   
   </div>
   <div className="mt-12 grid grid-cols-1 md:grid-cols-4" >
     {
        list.map((item)=>(
            <Cards key={item.id} item={item} />
        ) )
     }
   </div>
   </div>
   </>
  )
}

export default Course