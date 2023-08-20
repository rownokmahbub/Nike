import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';

export default function SpecialOffer() {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          className="object-contain w-full"
          src={offer}
          alt="offer"
          width={773}
          height={687}
        />{" "}
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <br />
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="my-4 lg:max-w-lg sm:max-w-sm info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mb-4 lg:max-w-lg sm:max-w-sm info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-5">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroudColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  );
}
