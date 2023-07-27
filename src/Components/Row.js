import React from 'react'
import Card from './Card'

const imageUrl = "https://image.tmdb.org/t/p/original";

const Row = ({title,array=[]}) => {
  return(
    <div className="row">
      <h2>{title}</h2>

      <div>
         {
          array.map((item,index)=>(
            <Card key = {index} img={`${imageUrl}/${item.poster_path}`}/>
          ))
         }
     </div>

    </div>
  )
}

export default Row
