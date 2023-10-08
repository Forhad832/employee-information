import React from 'react';


const AddEmployee = () => {
    return (
        <div className='py-12 container mx-auto px-4'>

        <form  className='lg:w-3/6  bg-slate-200 py-12 px-4 rounded-lg mx-auto '>
            <h2 className='text-3xl mb-6 font-medium text-center'>Add Employee Information !</h2>
            <div className="form-control mb-4">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" placeholder='name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="form-control mb-4">
                <label className="leading-7 text-sm text-gray-600">Job</label>
                <input type="text" id="job" name="job" placeholder='job' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="form-control mb-4">
                <label className="leading-7 text-sm text-gray-600">Password</label>
                <textarea name="" id="" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" cols="30" rows="5"></textarea>
               
            </div>
            <div className="form-control mb-4">
            <label className="leading-7 text-sm text-gray-600">Choose Employee Image</label> <br />
                <input type="file" name="" id="" />
            </div>
            <button className='block p-3 bg-indigo-600 text-white w-full mt-4 rounded-md'>Add Informtaion</button>
           
        </form>
    </div>
    );
};

export default AddEmployee;