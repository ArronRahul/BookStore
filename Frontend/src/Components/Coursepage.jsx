import React from 'react'
import fildata from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'; 

export default function Coursepage() {
 

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white'>
        <div className='pt-20 text-center'>
          <h1 className='text-2xl font-semibold md:px-20 px-4'>
            We're delighted to have you <span className='text-pink-500'>Here :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to='/'>
          
          <button className='mt-6 bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {fildata.map((item) => (
            <div key={item.id} className='px-2'>
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
