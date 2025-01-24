import FreaturedPost from "@/components/FreaturedPost"


const Home = async() => {
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  const data=await res.json()
  // console.log(data)
  
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center pb-10">
        <h2 className="font-extrabold text-3xl ">Welcome to Our Blogs!</h2>
        </div>
        <div className="">
          <FreaturedPost data={data}></FreaturedPost>
        </div>
      </div>
    )
  }
  
  export default Home
