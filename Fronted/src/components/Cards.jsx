import React from 'react'
import list from "../../public/list.json"
import card from "../../public/card.jpg"

function Cards({item}) {
   
  return (
   <>
   <div className="mt-4">
   <div className="card bg-base-100 w-86 shadow-xl mx-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  <figure  className="w-full h-auto object-cover">
    <img 
      src={card}   alt="Plot"
     />
     
  </figure>
  
  <div className="card-body">
    <h2 className="card-title">{item.name} </h2>
    <p>{item.title} </p>
    <div className="card-actions justify-end">
      
      <button className="btn btn-primary">{item.price} </button>
   
    
     
    </div>
  </div>
</div>
   </div>
   </>
  )
}
export default Cards