
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Domains from '@/components/Domains';
import WhyUs from '@/components/WhyUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Domains />
      <WhyUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
