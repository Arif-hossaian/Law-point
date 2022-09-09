import React from 'react';
import useTypingText from '../../hooks/useTypingText';
import BannerImage from '../../icons/58918-legal-statement.json';
import ImageAnimation from '../../shared/ImageAnimation';

const Banner: React.FC = () => {
  const { typingText } = useTypingText(
    'If you tremble with indignation at every injustice then you are a comrade of mine',
    80,
    100
  );
  return (
    <div className="py-16 px-20 bg-gradient-to-r from-[#614385] to-[#516395]">
      <div className="mx-auto mt-16 w-full">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6
           sm:px-8 md:flex-row"
        >
          <h1>
            <span className="mb-4 inline-block text-4xl font-bold text-gray-300 dark:text-gray-50 md:text-6xl">
              {'Search your'} <span className="text-indigo-600">{'Laws'}</span>
            </span>
            <span className="mt-2 block w-72 text-gray-200">{typingText}</span>
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
