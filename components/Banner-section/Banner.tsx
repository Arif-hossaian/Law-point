import React from 'react';
import Image from 'next/image';
import { Card } from '../Card/Card';
import useTypingText from '../../hooks/useTypingText';

const Banner: React.FC = () => {
  const { typingText } = useTypingText(
    'If you tremble with indignation at every injustice then you are a comrade of mine',
    80,
    100
  );
  return (
    <div className="bg-gray-100 py-16 dark:bg-gray-800">
      <div className="mx-auto mt-16 max-w-screen-lg">
        <section
          id="hero"
          className="flex flex-col items-center justify-between px-6 sm:px-8 md:flex-row"
        >
          <h1>
            <span className="mb-4 inline-block text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-5xl">
              {'Search your'} <span className="text-indigo-600">{'Laws'}</span>
            </span>
            <span className="mt-2 block w-72">{typingText}</span>
          </h1>

          <Card className="mt-8 h-auto w-[330px] text-center md:mt-0 md:w-[350px] lg:w-[400px]">
            <Image
              src="https://res.cloudinary.com/arifscloud/image/upload/v1648622652/law-banner_dplamn.jpg"
              alt="Banner"
              priority
              width={420}
              height={420}
              quality={100}
              className="block overflow-hidden rounded-full bg-gray-200"
            />
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Banner;
