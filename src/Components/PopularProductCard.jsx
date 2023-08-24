import React from 'react'
import { arrowRight, star } from '../assets/icons'
import Button from './Button'

export default function PopularProductCard({imgURL,name,price}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="" src={imgURL} alt={name} />
      <div className="flex justify-between items-center mt-3">
        <h3 className=" text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <a href='./PopularProductModel.jsx' className="flex justify-center items-center bg-coral-red rounded-full p-2 cursor-pointer">
          <img className="w-5 h-5" src={arrowRight} alt="arrow right" />
        </a>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="font-semibold text-2xl text-coral-red">{price}</p>
        <div className="flex justify-start gap-2.5">
          <img src={star} alt="rating" />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            4.5
          </p>
        </div>
      </div>
    </div>
  );
}
