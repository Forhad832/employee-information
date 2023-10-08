import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';

const Login = () => {
const auth = getAuth(app);
const navigate = useNavigate();

    const hanldeLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/')
        })
        .then(error=>{
            console.log(error);
        })

        form.reset()
        console.log("login success");
        
    }
    return (
        <div className='py-12 container mx-auto px-4'>

        <form onSubmit={hanldeLogin} className='lg:w-2/6  bg-slate-200 py-12 px-4 rounded-lg mx-auto '>
            <h2 className='text-3xl mb-6 font-medium text-center'>Please Login up !</h2>
          
            <div className="form-control mb-4">
                <label  className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" placeholder='email' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="form-control mb-4">
                <label  className="leading-7 text-sm text-gray-600">Password</label>
                <input type="password" id="password" name="password" placeholder='password' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className='block p-3 bg-indigo-600 text-white w-full mt-4 rounded-md'>Login</button>
            <p className='text-center mt-12'><Link to=""><span className='text-indigo-500'>Forgotten Password ? </span></Link></p>
        </form>
    </div>
    );
};

export default Login;