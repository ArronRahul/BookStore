import React from 'react'
import list from '../../public/list.json'

export default function Coursepage() {
  console.log(list)
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white'>
      <div className='pt-20 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:px-20 px-4'>We're delighted to have you <span className='text-pink-500'>Here :)</span></h1>
        <p></p>
      </div>
    </div>
    </>
  )
}
