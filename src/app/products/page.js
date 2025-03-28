'use client';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Image from 'next/image';

export default function MyCart() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  return (
    <main>
      <Navbar />
      <section className='px-6 py-20 max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-[auto_1fr] gap-6 mb-10 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold'>All Our products</h2>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-10'>
          {dataSite.products.map((item) => {
            const isInCart = validateProductInCart(item.id);

            return (
              <div key={item.id} className='flex flex-col'>
                {/* Imagen */}
                <div className='w-full h-48 relative mb-4 rounded-md overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Título */}
                <h3 className='font-semibold text-lg mb-1'>{item.name}</h3>

                {/* Descripción */}
                <p className='text-sm text-gray-600 flex-1 mb-4'>
                  {item.description}
                </p>

                {/* Botón */}
                <button
                  onClick={() => handleAddOrRemoveProduct(item.id)}
                  className={`mt-auto text-sm font-medium text-[#2F5F53] hover:underline`}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
