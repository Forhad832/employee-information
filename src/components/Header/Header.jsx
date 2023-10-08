import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const {user,logout} = useContext(AuthContext);
    const navRef = useRef();
    console.log(navRef);
    const showbar = () =>{
        console.log('ckicl');
        navRef.current.classList.toggle('hidden')
    }
    const signOut = () =>{
        logout()
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='bg-slate-200 p-2'>
            <div className="px-4 container mx-auto">
                <nav className='flex relative justify-between items-center'>
                <div>
                    <Link to="/" className='text-3xl font-bold'>EHeros</Link>
                </div>
                <div ref={navRef} className=' bg-slate-300  md:bg-inherit flex-col md:flex-row  md:justify-end items-end hidden md:flex w-full absolute top-11 md:top-0 md:static p-2 gap-4'>
                    <Link to="/" className='text-lg block  mb-2 md:mb-0'>Home</Link>
                    <Link to="/addemployee" className='text-lg block mb-2 md:mb-0'>Add Employees</Link>
                    
                    {
                        user ? <><span className='text-indigo-400'>{user?.email}</span>  <Link onClick={signOut} className='text-lg block text-white bg-indigo-500 px-4 rounded-sm mb-2 md:mb-0 '>Sign out</Link></> : <><Link to="/signup" className='text-lg block text-white mb-2 md:mb-0 bg-indigo-500 px-4 rounded-sm ' >Sign up</Link> 
                        <Link to="/login" className='text-lg block mb-2 md:mb-0 text-white bg-indigo-500 px-4 rounded-sm '>Login</Link> </>
                    }
                  
                    
                </div>
                <div onClick={showbar} className='block cursor-pointer lg:hidden'>
                <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
            </div>
        </div>
    );
};

export default Header;