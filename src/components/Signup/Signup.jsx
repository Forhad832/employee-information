import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Signup = () => {
const {createUser} = useContext(AuthContext);

    const hanleSubmitsignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email,password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .then(error => {
                console.log(error)
            })


            form.reset();

    }
    return (
        <div className='py-12 container mx-auto px-4'>

            <form onSubmit={hanleSubmitsignup} className='lg:w-2/6  bg-slate-200 py-12 px-4 rounded-lg mx-auto '>
                <h2 className='text-3xl mb-6 font-medium text-center'>Please Sign up !</h2>
                <div className="form-control mb-4">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" placeholder='name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="form-control mb-4">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" placeholder='email' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="form-control mb-4">
                    <label className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" name="password" placeholder='password' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className='block p-3 bg-indigo-600 text-white w-full mt-4 rounded-md'>Signup</button>
                <p className='text-center mt-12'>Already You have an account ? <Link to="/signup"><span className='text-indigo-500'>Login</span></Link></p>
            </form>
        </div>
    );
};

export default Signup;