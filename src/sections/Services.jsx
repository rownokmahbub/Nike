import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Components/ServiceCard'

export default function Services() {
  return (
    <section className='max-container justify-center gap-9 flex flex-wrap'>
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}
