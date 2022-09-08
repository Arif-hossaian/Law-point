import React from 'react';
import { Footer } from '../components/Footer-section/Footer';
import { Navbar } from '../components/Header-section/Navbar';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div id="top">
        <main className="">{children}</main>
        <footer className="mt-16">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Container;
