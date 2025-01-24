

const page = async({params}) => {
const {blogid}=params

const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogid}`);
const post = await res.json();
console.log(post)
const {userId,id,title,body}=post
if (!post) return <div className="p-8">Loading...</div>;
  return (
    <div className="flex flex-col justify-start  w-[700px] mx-auto py-12">
      <h2> <span>Title : </span>{title}</h2>
      <p><span>id : </span> {id}</p>
      <p><span>UserId : </span> {userId}</p>
      <p><span>Description : </span> {body}</p>
    </div>
  )
}

export default page

