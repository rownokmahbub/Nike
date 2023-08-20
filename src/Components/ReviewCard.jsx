import React from 'react'
import { star } from '../assets/icons';

export default function ReviewCard({ rating, imgURL, customerName, feedback }) {
  return <div className='flex justify-center items-center flex-col'>
    <img src={imgURL} alt="customer" className='rounded-full w-[120px] h-[120px]'/>
    <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
    <div className='mt-3 flex flex-col justify-center items-center gap-2.5'>
        <img className='object-contain m-0' src={star} alt="rating" width={24} height={24}/>
        <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>

  </div>;
}
