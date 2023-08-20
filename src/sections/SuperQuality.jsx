import React from 'react'
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg flex-col lg:flex-row gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we Provide you
          <br />
          <span className="text-coral-red"> super </span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="my-4 lg:max-w-lg sm:max-w-sm info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <div>
          <Button label="View Details" />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
    <img className='object-contain' src={shoe8} alt="shoe" />
      </div>
    </section>
  );
}
