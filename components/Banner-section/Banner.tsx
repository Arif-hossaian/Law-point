import React, { useRef, useEffect } from 'react';
import BannerImage from '../../icons/58918-legal-statement.json';
import ImageAnimation from '../../shared/ImageAnimation';
import Typed from 'typed.js';

const Banner: React.FC = () => {
  const el = useRef<HTMLSpanElement | any>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Lawyers', 'Laws', 'Helpline'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="py-16 px-20 bg-gray-200 dark:bg-gray-700">
      <div className="mx-auto mt-16 w-full">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6
           sm:px-8 md:flex-row"
        >
          <h1>
            <span className="mb-4 inline-block text-2xl font-bold text-gray-500 dark:text-gray-50 md:text-6xl">
              {'Find out your desire'}
            </span>
            <br></br>
            <span
              className="text-indigo-600 md:text-4xl mt-1 text-lg mb-2"
              ref={el}
            ></span>
            <span className="mt-4 block w-72 text-gray-600 dark:text-gray-50">
              If you tremble with indignation at every injustice then you are a
              comrade of mine
            </span>
          </h1>

          <div className="mt-8 h-auto w-[330px] rounded-full text-center md:mt-0 md:w-[350px] lg:w-[500px]">
            <ImageAnimation animationData={BannerImage} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
