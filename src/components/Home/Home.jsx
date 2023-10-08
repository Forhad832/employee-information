import React, { useState } from 'react';
import { employeeData } from './employeeData';
import Employee from '../Employee/Employee';

const Home = () => {
    const [employees, setEmployees] = useState(employeeData);

 

    const handleSearchEmployee = (event) =>{
        event.preventDefault();
        const form = event.target;
        const searchText = form.employeeName.value;

        const filterData = employees.filter(e => e.name == searchText);

        setEmployees(filterData)
        console.log(filterData);
    }
    return (
        <>
            <div className=' min-h-screen bg-hero-pattern w-full mx-auto bg-no-repeat flex flex-col items-center justify-center'>
                <h2 className='text-5xl mb-6 font-bold text-white'>Our Real EHeros</h2>
               <div >
              <form onSubmit={handleSearchEmployee} className='max-w-sm flex  w-96  mx-auto' >
              <input className='block px-3 outline-none rounded-l-lg py-3 w-full' type="search" placeholder='type here employee full name' name="employeeName" id="" /><button className='px-2 rounded-r-lg py-3 bg-slate-300' >Search</button>
              </form>
               </div>
            </div>
            <h2 className='text-center text-2xl font-medium'>Our Eheros</h2>
            <div className="border border-pink-500 mb-12 w-32 mx-auto"></div>
           <div className="container px-4 mx-auto py-12">
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    employees.map((e, i) => <Employee data={e} key={i}></Employee>)
                }
            </div>
           </div>
        </>
    );
};

export default Home;