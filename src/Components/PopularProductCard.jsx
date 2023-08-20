import React from 'react'
import { star } from '../assets/icons'

export default function PopularProductCard({imgURL,name,price}) {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img className='w-[280px] h-[280px]' src={imgURL} alt={name} />
        <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt='rating' />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='font-semibold text-2xl text-coral-red'>{price}</p>
    </div>
  )
}
