'use client';
import { dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <div className='bg-[#F7F9F9]'>
      <section className='flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-20 py-20 max-w-7xl mx-auto gap-10 mt-20'>
        {/* Left */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            {dataSite.subtitle}
          </h1>
          <p className='text-gray-700 max-w-md mx-auto lg:mx-0 mb-8'>
            {dataSite.description}
          </p>

          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4'>
            <Link href='/more-information'>
              <button className='bg-white hover:bg-gray-100 px-6 py-3 rounded-full text-sm font-semibold shadow'>
                Let’s Get in Touch
              </button>
            </Link>
            <Link href='/about'>
              <button className='text-sm font-medium text-gray-800 flex items-center gap-1'>
                About Us <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className='flex-1 relative max-w-sm mx-auto lg:mx-0'>
          <div className='rounded-full overflow-hidden relative z-10 border-[10px] border-[#e5efef]'>
            <Image
              src={dataSite.image_hero}
              alt='Hero Person'
              width={400}
              height={400}
              className='object-cover w-full h-80'
            />
          </div>

          <div className='absolute -bottom-6 -left-6 w-[430px] h-[430px] rounded-full bg-[#2F5F53] -z-0' />

          <div className='absolute left-0 bottom-14 bg-[#36E0B6] text-white font-semibold text-sm px-4 py-2 rounded-xl shadow z-20'>
            <p className='text-lg leading-4'>98%</p>
            <span className='text-xs font-normal'>Return on investment</span>
          </div>

          <div className='absolute right-0 top-1/2 bg-[#36E0B6] text-white font-semibold text-sm px-4 py-2 rounded-xl shadow z-20'>
            <p className='text-lg leading-4'>12+</p>
            <span className='text-xs font-normal'>Years experience</span>
          </div>
        </div>
      </section>

      {/* <div className='flex items-center justify-center gap-10 py-10 flex-wrap opacity-70'>
        <Image
          src='/images/logo1.svg'
          alt='Boltshift'
          width={100}
          height={20}
        />
        <Image src='/images/logo2.svg' alt='Lightbox' width={100} height={20} />
        <Image
          src='/images/logo3.svg'
          alt='FeatherDev'
          width={100}
          height={20}
        />
      </div> */}
    </div>
  );
}
