import React, { useState } from 'react'
import "./StarRating.css"
import {FaStar} from "react-icons/fa";

function StarRating() {
    const[rating,setRating]=useState(0)
    const[hover,setHovers]=useState(null)
  return (
    <div>
         {[...Array(5)].map((val,i)=>{
         const ratingValue=i+1
         return <label>
             <input type="radio" name="rating" value={ratingValue} 
             onClick={()=>setRating(ratingValue)}></input>
 <FaStar  className="star" 
             onMouseOver={()=>setHovers(ratingValue)}
             onMouseOut={()=>setHovers(null)} 
             color={ratingValue <=(hover || rating) ? "#ffc107":"#e4e5e9"} size={50}/>
 </label>
     })}
     <h3>{rating}/5</h3>
      
    </div>
  )
}

export default StarRating