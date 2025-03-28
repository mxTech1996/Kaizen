'use client';
import { dataSite } from '@/data';
import Image from 'next/image';
import { FaUserTie, FaSearch, FaRegChartBar } from 'react-icons/fa';

export default function HowWeWork() {
  return (
    <section className='px-6 py-20 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <p className='text-sm text-gray-500 mb-1'>What we provide</p>
        <h2 className='text-3xl md:text-4xl font-bold'>How we work</h2>
      </div>

      <div className='grid md:grid-cols-2 gap-10 items-center'>
        {/* Left image */}
        <div className='relative w-full'>
          <Image
            src={dataSite.services[0].image}
            alt='Consultoría administrativa'
            width={600}
            height={500}
            className='w-full rounded-md object-cover'
          />
          <div className='absolute bottom-4 left-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-white rounded-xl px-4 py-3 flex items-center gap-2 shadow-lg'>
            <div className='flex -space-x-2'>
              <Image
                src='/images/avatar1.jpg'
                alt='Client 1'
                width={32}
                height={32}
                className='rounded-full border-2 border-white'
              />
              <Image
                src='/images/avatar2.jpg'
                alt='Client 2'
                width={32}
                height={32}
                className='rounded-full border-2 border-white'
              />
              <Image
                src='/images/avatar3.jpg'
                alt='Client 3'
                width={32}
                height={32}
                className='rounded-full border-2 border-white'
              />
            </div>
            <p className='text-sm ml-3'>60+ satisfied clients</p>
          </div>
        </div>

        {/* Right process steps */}
        <div className='space-y-10'>
          {/* Step 1 */}
          <div className='flex gap-4'>
            <div className='bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center'>
              <FaUserTie className='text-gray-700' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>
                Initial Business Assessment
              </h3>
              <p className='text-sm text-gray-600'>
                We begin with a personalized consultation to understand your
                administrative framework, current challenges, and improvement
                goals.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className='flex gap-4'>
            <div className='bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center'>
              <FaSearch className='text-gray-700' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>
                Operational Analysis & Diagnosis
              </h3>
              <p className='text-sm text-gray-600'>
                Our consultants conduct a thorough evaluation of internal
                operations, workflows, communication chains, and decision
                structures.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className='flex gap-4'>
            <div className='bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center'>
              <FaRegChartBar className='text-gray-700' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>
                Strategy Development & Implementation
              </h3>
              <p className='text-sm text-gray-600'>
                Based on findings, we design actionable strategies to optimize
                administrative systems and guide implementation with your teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
