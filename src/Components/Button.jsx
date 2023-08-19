import React from 'react'

export default function Button({label,iconURL}) {
  return (
    <button className='flex items-center justify-center px-7 py-4 border font-montserrat leading-none bg-coral-red rounded-full text-white'>
    {label}
    <img className='ml-2 rounded-full w-5 h-5' src={iconURL} alt="Arrow Rignt icon" />
    </button>
  )
}
