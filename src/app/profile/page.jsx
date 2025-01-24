import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"


const ProfilePage = async() => {
    const {getUser}=getKindeServerSession()
    const user=await getUser()
    console.log(user)
const {email,family_name}=user
  
  return (
    <div className="card bg-primary text-primary-content w-[500px] mx-auto mt-16">
      <div className="card-body">
        <p> <span>Familt name : </span>{family_name}</p>
        <h2 className="card-title">{email}</h2>
        <div className="card-actions justify-end">

        </div>
      </div>
    </div>
  )
}

export default ProfilePage
