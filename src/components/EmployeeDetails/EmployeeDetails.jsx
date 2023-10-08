import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { employeeData } from '../Home/employeeData';

const EmployeeDetails = () => {
    const [employeeDatas] = useState(employeeData);
    const [newData,setNewData] = useState({});
    const {name,job,company,website,picture,bio,skills,married,born} = newData;
    console.log(newData);
    const data = useParams();

    useEffect(()=>{
        const employee = employeeDatas.filter(e=> e.name === data.details)[0];
        setNewData(employee);
    },[data.details, employeeDatas])

    return (
        <div className='container mx-auto px-4'>
            <h2 className='text-center text-3xl my-12 font-bold'>About More <span className='text-indigo-700'>Mr. {name}</span></h2>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 py-12'>
                <div className='col-span-8'>
                    {
                        bio?.map((e, i) => (
                            <p className='text-lg mb-4' key={i}>{e}</p>
                        ))
                    }
                    <div>
                        <h3 className='text-xl font-bold'>Skills :</h3>
                        <div className='flex flex-col'>
                        {
                        skills?.map((e,i)=>(
                            <p className='bg-primary rounded-lg ml-10 p-1' key={i}>{e}</p>
                        ))
                    }
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <img className='h-96 mb-3' src={picture} alt="" />
                    <h4 className=''><span className='text-lg font-medium'>Name</span> :{name}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Job</span> :{job}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Company</span> :{company}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Born</span> :{born}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Maritial status</span> :{married}</h4>
                    <h4 className=''><span className='text-lg font-medium'>Website</span> : <a href={`${website}`}>{website}</a></h4>
                </div>

            </div>
        </div>
    );
};

export default EmployeeDetails;