import { Link, NavLink } from "react-router-dom";
import './Header.css'
import image from './Image/icon.png'
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        console.log(e.target.value)
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    console.log(theme)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/"><span className="text-lg font-semibold">Home</span></NavLink></li>
        <li><NavLink to="/AllJob"><span className="text-lg font-semibold">All Jobs</span></NavLink></li>
        <li><NavLink to="/AppliedJob"><span className="text-lg font-semibold">Applied Jobs</span></NavLink></li>
        <li><NavLink to="/AddJob"><span className="text-lg font-semibold">Add A Job</span></NavLink></li>
        <li><NavLink to="/MyJob"><span className="text-lg font-semibold">My Jobs</span></NavLink></li>
        <li><NavLink to="/Blogs"><span className="text-lg font-semibold">Blogs</span></NavLink></li>
        {/* <li><NavLink to="/TopRatedBook">Catalog</NavLink></li> */}

    </>

    return (
        <div className="">
            <div className="lg:navbar md:navbar bg-white">
                <div className="navbar-start-Custom">
                    <div className="dropdown md:top-[2px] ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:w-[40px] md:h-[40px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {links}
                            <div className="">

                                <div className="">
                                    {
                                        user && <span className=" absolute lg:inline md:inline hidden cursor-pointer w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full relative right-16  w-[45px] h-[45px]" src={user.photoURL} alt="" title={user.displayName} /></span>
                                    }

                                    {
                                        user ?
                                            <button onClick={handleSignOut} className="button40">LOG OUT</button>
                                            :
                                            <div className="flex gap-4 ml-[100px] md:mt-0 sm:mt-10 lg:mt-0">
                                                <Link to="/login">
                                                    <button className="button40 lg:mb-0 md:mb-0 mb-5">LOGIN</button>
                                                </Link>
                                                <Link to="/register">
                                                    <button className="button40">REGISTER</button>
                                                </Link>
                                            </div>
                                    }
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="lg:ml-10 md:ml-10 sm:ml-0 flex items-center gap-3">
                        <p><img className="w-[53px] h-[]" src={image} alt="" /></p>
                        <p className="text-3xl font-semibold animation ">Career Finder</p>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 font-medium ">
                        <li><NavLink to="/"><span className="text-lg font-semibold">Home</span></NavLink></li>

                        <li><NavLink to="/AllJob"><span className="text-lg font-semibold mx-8">All Jobs</span></NavLink></li>

                        <li><NavLink to="/AppliedJob"><span className="text-lg font-semibold">Applied Jobs</span></NavLink></li>

                        <li><NavLink to="/AddJob"><span className="text-lg mx-8 font-semibold">Add A Job</span></NavLink></li>

                        <li><NavLink to="/MyJob"><span className="text-lg font-semibold">My Jobs</span></NavLink></li>

                        <li><NavLink to="/Blogs"><span className="text-lg mx-8 font-semibold">Blogs</span></NavLink></li>

                        {/* <li><NavLink to="/Blog"><span className="text-lg font-semibold">User Profile</span></NavLink></li> */}

                    </ul>

                    <div className="relative left-60">
                        <label className="flex cursor-pointer gap-2">
                            {/* sun icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>

                            <input onChange={handleToggle} type="checkbox" className="toggle theme-controller" />

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>

                        </label>
                    </div>

                    <div className="">

                        <div className="">
                            

                            {
                                user && <span className="ml-[350px] mt-1 absolute lg:inline md:inline hidden cursor-pointer w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full relative right-16  w-[45px] h-[45px]" src={user.photoURL} alt="" title={user.displayName} /></span>
                            }

                            {
                                user ?
                                    <button onClick={handleSignOut} className="ml-[350px]  button40">LOG OUT</button>
                                    :
                                    <div className="flex gap-4 ml-[150px] md:mt-0 sm:mt-10 lg:mt-0">
                                        <Link to="/login">
                                            <button className="button40 lg:mb-0 md:mb-0 mb-5">LOGIN</button>
                                        </Link>
                                        <Link to="/register">
                                            <button className="button40">REGISTER</button>
                                        </Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;