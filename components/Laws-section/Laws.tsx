import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';

export const Laws = () => {
  return (
    <section
      id="projects"
      className="relative py-16 mx-auto max-w-screen-lg px-5"
    >
      <span className="absolute inset-2/4 -z-10 h-[500px] max-h-full w-[500px] max-w-full -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/20 blur-2xl" />
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="mx-auto max-w-screen-lg  text-center lg:order-2 lg:mx-0 lg:ml-16 lg:max-w-sm lg:text-left">
          <h2 className="relative text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Laws
          </h2>
          <span className="mx-auto mt-2 block h-1.5 w-[80px] rounded-full bg-indigo-600 lg:mx-0" />

          <p className="mt-6 break-words text-lg">
            {`In this section, users can read constitutional `}{' '}
            <a className="font-semibold text-indigo-600 dark:text-indigo-400">
              laws
            </a>
            {` with a search and category-based filtering options too`}
          </p>

          <div className="mt-8">
            <Link href={`/laws`} passHref>
              <Button as="a">View All Laws</Button>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-16 grid max-w-xl grid-cols-2 gap-6 md:gap-8 lg:order-1">
          <div className="row-span-2 flex overflow-hidden rounded-2xl bg-gray-200 shadow-xl saturate-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:saturate-100">
            <Image
              src="https://res.cloudinary.com/arifscloud/image/upload/v1648622041/constitution-law_w9neia.jpg"
              alt="Constitution law banner image"
              width={250}
              height={300}
              quality={100}
              className="transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
          <div className="row-span-1 flex overflow-hidden rounded-2xl bg-gray-200 shadow-xl saturate-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:saturate-100">
            <Image
              src="https://res.cloudinary.com/arifscloud/image/upload/v1648622158/land-law_sq2eaf.jpg"
              alt="project screenshot"
              width={250}
              height={200}
              quality={100}
              className="transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
          <div className="row-span-2 flex overflow-hidden rounded-2xl bg-gray-200 shadow-xl saturate-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:saturate-100">
            <Image
              src="https://res.cloudinary.com/arifscloud/image/upload/v1648622238/bd-flag_loq14j.jpg"
              alt="project screenshot"
              width={250}
              height={300}
              quality={100}
              className="transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
          <div className="row-span-1 flex overflow-hidden rounded-2xl bg-gray-200 shadow-xl saturate-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:saturate-100">
            <Image
              src="https://res.cloudinary.com/arifscloud/image/upload/v1648622363/law-banner_mkx1ez.jpg"
              alt="project screenshot"
              width={250}
              height={200}
              quality={100}
              className="transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
