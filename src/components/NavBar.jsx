import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import React from 'react'



const NavBar = async() => {
    const {getUser}=getKindeServerSession()
    const user=await getUser()
    console.log(user)
    return (
        <div className="navbar bg-gray-400 text-black">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/profile'>Profile</Link></li>
            </ul>
            </div>
            <Link href='/' className="btn btn-ghost text-xl">Blog Viewer</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/profile'>Profile</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            {
            user ?
                <>
                    <ul>
                        <li>
                            <Link className='btn btn-ghost p-2 rounded-md' href='/api/auth/logout'>Sign out</Link>
                        </li>
                    </ul>
                </> :
                <>
                    <ul className='flex justify-center items-center'>
                        <li>
                            <Link className='btn btn-ghost p-2 rounded-md' href='/api/auth/login'>Sign In</Link>
                        </li>
                        <li>
                            <Link className='btn btn-ghost  p-2 rounded-md' href='/api/auth/register'>Sign Up</Link>
                        </li>
                        {/* <LoginLink>Sign in</LoginLink>
                        <RegisterLink>Sign up</RegisterLink> */}
                    </ul>
                </>
            }
        </div>
        </div>
    )
}

export default NavBar
