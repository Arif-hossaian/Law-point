import React from 'react';
import { Footer } from '../components/Footer-section/Footer';
import { Navbar } from '../components/Header-section/Navbar';
// import { Footer } from '@/components/Footer';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div id="top" className="flex h-screen flex-col justify-between">
        <main className="mx-auto mt-24 w-full max-w-screen-lg px-6 sm:mt-32 sm:px-8 xl:px-12">
          {children}
        </main>
        {/* <footer className="mt-16">
          <Footer />
        </footer> */}
      </div>
    </>
  );
};

export default Container;
