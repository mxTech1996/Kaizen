import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { dataSite } from '@/data';

export default function MyCart() {
  return (
    <main>
      <Navbar />
      <section className='bg-white px-6 py-20 max-w-7xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
          All Services
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {dataSite.services.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 border hover:bg-gray-900 hover:text-white transition duration-300 rounded ${'bg-gray-50 text-gray-900'}`}
            >
              <p className='text-sm font-medium mb-3'>{index + 1}</p>
              <h4 className='font-semibold mb-2 leading-snug'>
                {service.title}
              </h4>
              <p className='text-sm text-inherit'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
