'use client';
import { useRouter } from 'next/navigation';
import { navData } from '@/data';
import { Navbar as NavbarV2, theme } from 'ecommerce-mxtech';
import { useInformation } from '@/store/useInformation';
import Link from 'next/link';
import { L } from 'ecommerce-mxtech/dist/layout-CZVeTRhb';

const { useToken } = theme;

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-10 py-6 border-b'>
      {/* Logo */}
      <div className='text-xl font-bold text-gray-800'>
        <span className='text-[#2F5F53] mr-2'>●</span>
        Kaizen
      </div>

      {/* Menu */}
      <ul className='hidden md:flex gap-8 text-gray-700 font-medium text-sm'>
        <Link href='/#services'>
          <li className='cursor-pointer'>Services</li>
        </Link>
        <Link href='/#about'>
          <li className='cursor-pointer'>About Us</li>
        </Link>
        <Link href='/products'>
          <li className='cursor-pointer'>Products</li>
        </Link>
        <Link href='/more-information'>
          <li className='cursor-pointer'>Contact us</li>
        </Link>
        <Link href='/#testimonials'>
          <li className='cursor-pointer'>Testimonials</li>
        </Link>
      </ul>

      {/* Button */}
      <Link href='/my-cart'>
        <button className='bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-full text-sm font-semibold'>
          Go to Cart
        </button>
      </Link>
    </header>
  );
};

export default Navbar;
