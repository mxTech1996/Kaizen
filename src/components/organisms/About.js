'use client';
import { dataSite } from '@/data';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id='about' className='bg-[#1D2A2B] text-white px-6 py-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Top section */}
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          {/* Image */}
          <div className='w-full'>
            <Image
              src={dataSite.image_hero2}
              alt='Consultoría en administración'
              width={600}
              height={500}
              className='w-full rounded-md object-cover'
            />
          </div>

          {/* Text content */}
          <div>
            <p className='text-sm text-gray-300 mb-1'>About us</p>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Empowering smart <br />
              business management
            </h2>
            <p className='text-sm text-gray-300 font-semibold mb-3'>
              Tailored administrative consulting for efficient operations.
            </p>
            <p className='text-gray-400 text-sm mb-6 max-w-xl'>
              We specialize in crafting customized administrative strategies to
              optimize workflows, improve resource allocation, and enhance
              decision-making processes across departments. Our approach aligns
              your internal operations with long-term organizational goals.
            </p>

            {/* Checklist */}
            <ul className='space-y-3 text-sm'>
              <li className='flex items-start gap-2'>
                <FaCheck className='text-green-400 mt-1' />
                Operational Efficiency
              </li>
              <li className='flex items-start gap-2'>
                <FaCheck className='text-green-400 mt-1' />
                Resource & Process Optimization
              </li>
              <li className='flex items-start gap-2'>
                <FaCheck className='text-green-400 mt-1' />
                Leadership & Change Management
              </li>
              <li className='flex items-start gap-2'>
                <FaCheck className='text-green-400 mt-1' />
                Performance Monitoring Systems
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20'>
          <div>
            <h3 className='text-3xl font-bold'>50+</h3>
            <p className='text-sm text-gray-400 mt-1'>
              Organizations Consulted
            </p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>2+</h3>
            <p className='text-sm text-gray-400 mt-1'>
              Years of industry experience
            </p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>10+</h3>
            <p className='text-sm text-gray-400 mt-1'>
              Specialized consultants
            </p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>98%</h3>
            <p className='text-sm text-gray-400 mt-1'>
              Client satisfaction rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
