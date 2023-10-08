import React from 'react';
import { Link } from 'react-router-dom';

const Employee = ({data}) => {
    console.log(data);
    // eslint-disable-next-line react/prop-types
    const {name,picture,job,company} = data;
    return (
        <div className='bg-slate-200 rounded-lg'>
            <img className='w-full rounded-t-lg h-72' src={picture} alt="" />
            <div className="px-2 mt-4">
            <h2 className='text-xl font-medium'>Name :{name}</h2>
            <p  className='text-sm font-medium'>Job : {job} at {company}</p>
            <Link to={`/${name}`} className='w-full p-2 bg-pink-500 text-white  block mt-2 rounded-lg text-center font-medium'>Details More...</Link>
            </div>
        </div>
    );
};

export default Employee;