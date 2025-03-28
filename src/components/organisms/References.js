'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Brooklyn Simmons',
    position: 'Client Manager',
    rating: 5,
    message:
      'Thanks to their administrative guidance, we restructured our processes and reduced costs by 30%. Their insight is unmatched.',
  },
  {
    name: 'Michael Reyes',
    position: 'Operations Director',
    rating: 5,
    message:
      'They helped us streamline reporting systems and enhanced decision-making across departments. Truly transformational.',
  },
  {
    name: 'Linda Zhao',
    position: 'HR Specialist',
    rating: 4,
    message:
      'Their team brought a strategic lens to our talent management. We now operate with more clarity and cohesion.',
  },
  {
    name: 'Ravi Patel',
    position: 'Finance Lead',
    rating: 5,
    message:
      'Consulting sessions improved our internal controls and budgeting systems. Highly professional and efficient.',
  },
  {
    name: 'Carla Torres',
    position: 'Logistics Coordinator',
    rating: 5,
    message:
      'Our administrative workflows were outdated. Their consultants helped us modernize them with practical, simple solutions.',
  },
  {
    name: 'James Lee',
    position: 'Compliance Analyst',
    rating: 4,
    message:
      'Very thorough and adaptive to our industry’s needs. Their administrative audits brought clarity and structure.',
  },
  {
    name: 'Sophie Dubois',
    position: 'Business Analyst',
    rating: 5,
    message:
      'Their team empowered us to document and scale our internal procedures across branches. The impact was immediate.',
  },
  {
    name: 'Tariq Hussein',
    position: 'Executive Assistant',
    rating: 5,
    message:
      'Every meeting was actionable. They simplified our administrative chaos and created a system that’s easy to manage.',
  },
];

function StarRating({ rating }) {
  return (
    <div className='flex gap-1 text-white mt-4'>
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={i < rating ? 'text-white' : 'text-gray-500'}
        />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const { name, position, message, rating } = testimonials[current];

  return (
    <section id='testimonials' className='bg-[#1D2A2B] text-white px-6 py-20'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left */}
        <div>
          <p className='text-sm text-gray-400 mb-2'>Testimonials</p>
          <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-6'>
            What our happy <br /> customers say
          </h2>

          <div className='flex gap-4'>
            <button
              onClick={prev}
              className='w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-[#1D2A2B] transition'
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className='w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-[#1D2A2B] transition'
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className='text-lg leading-relaxed text-white/90 mb-6'>
            &quot;{message}&quot;
          </p>
          <p className='font-semibold text-white'>{name}</p>
          <p className='text-sm text-gray-300'>{position}</p>
          <StarRating rating={rating} />
        </div>
      </div>
    </section>
  );
}
