"use client";

import Link from "next/link";

const PostCard = ({id,index,title}) => {
  // console.log(id)

  return (
    <>
      <Link href={`/blog/${id}`}>
        <div className=" bg-gray-300  h-[100px]  flex justify-start items-center rounded-md shadow-[50px]">
            <p className="p-6 font-semibold text-black"><span className="mr-2">{index+1}.</span> {title}</p>
        </div>
      </Link>
    </>
  )
}

export default PostCard
