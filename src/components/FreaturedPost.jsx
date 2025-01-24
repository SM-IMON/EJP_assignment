"use client";

import PostCard from "./PostCard";

const FreaturedPost = ({data}) => {
    // console.log(data)
  return (
    <div>
      <div className="grid grid-cols-3 gap-5" > 
        {
            data.map((item,index)=>(<PostCard key={item.id} id={item.id} title={item.title} index={index}></PostCard>))
        }
      </div>
    </div>
  )
}

export default FreaturedPost
