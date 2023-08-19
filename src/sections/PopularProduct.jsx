import React from "react";
import { products } from "../constants";

export default function PopularProduct() {
  return (
    <section className="mx-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our
          <span className="text-coral-red"> Popular</span> Product
        </h2>
        <p className="lg:max-wlg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4">
          {products.map((product) =>(
            <PopularProductCard key/>
          ))}
      </div>
    </section>
  );
}
