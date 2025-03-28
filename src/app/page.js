'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  Features,
  FeaturesV2,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { primaryColor } from '@/data';
import HeroSection from '@/components/organisms/Hero';
import ServicestSection from '@/components/organisms/Services';
import AboutSection from '@/components/organisms/About';
import TestimonialCarousel from '@/components/organisms/References';
import HowWeWork from '@/components/organisms/Work';
import LatestNewsProducts from '@/components/organisms/Products';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  console.log(dataSite);
  return (
    <main
      style={{
        backgroundColor: '#F7F9F9',
      }}
    >
      <Navbar />
      <HeroSection />
      <ServicestSection />
      <LatestNewsProducts />
      <AboutSection />
      <TestimonialCarousel />
      <HowWeWork />
      <Footer />
    </main>
  );
}
