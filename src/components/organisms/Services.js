'use client';
import { dataSite } from '@/data';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

export default function ServicestSection() {
  return (
    <section id='services' className='bg-white px-6 py-20 max-w-7xl mx-auto'>
      {/* Title */}
      <div className='mb-10 border-b pb-10'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
          {dataSite.info[0].title}
        </h2>

        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6'>
          <p className='text-gray-700 max-w-2xl'>
            {dataSite.info[0].description}
          </p>

          {/* <button className='w-14 h-14 bg-gray-900 text-white rounded-none flex items-center justify-center text-lg'>
            <FaArrowRight />
          </button> */}
        </div>

        {/* Checkpoints */}
        <div className='flex flex-wrap gap-6 mt-8 text-sm font-medium text-gray-800'>
          <div className='flex items-center gap-2'>
            <FaCheck className='text-green-600' />
            {dataSite.services[0].title}
          </div>
          <div className='flex items-center gap-2'>
            <FaCheck className='text-green-600' />
            {dataSite.services[1].title}
          </div>
          <div className='flex items-center gap-2'>
            <FaCheck className='text-green-600' />
            {dataSite.services[2].title}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='flex items-center justify-between mb-8'>
        <div>
          <p className='text-sm text-gray-500 font-medium'>Our services</p>
          <h3 className='text-2xl md:text-3xl font-bold mt-1'>
            Ways to support <br /> your business
          </h3>
        </div>
        <Link href='/services'>
          <button className='hidden md:block bg-gray-100 hover:bg-gray-200 text-sm px-5 py-2 rounded-full font-medium'>
            View All Services
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {dataSite.services.slice(0, 3).map((service, index) => (
          <div
            key={service.id}
            className={`p-6 border hover:bg-gray-900 hover:text-white transition duration-300 rounded ${
              index === 0
                ? 'bg-gray-900 text-white'
                : 'bg-gray-50 text-gray-900'
            }`}
          >
            <p className='text-sm font-medium mb-3'>{index + 1}</p>
            <h4 className='font-semibold mb-2 leading-snug'>{service.title}</h4>
            <p className='text-sm text-inherit'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
