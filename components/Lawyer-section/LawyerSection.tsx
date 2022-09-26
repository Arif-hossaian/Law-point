import React from 'react';
import ImageAnimation from '../../shared/ImageAnimation';
import LawyerImage from '../../icons/49480-businessman-taking-notes.json';
import Link from 'next/link';
import { Button } from '../Button';

const LawyerSection = () => {
  return (
    <section className="py-16 mx-auto max-w-screen-lg px-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-sm lg:text-left">
          <h2 className="relative text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Find your desire Lawyer
          </h2>
          <span className="mx-auto mt-2 block h-1.5 w-[150px] rounded-full bg-indigo-600 lg:mx-0" />

          <p className="mt-6 break-words text-lg">
            {`A large number of victims fall into different types of harassment. They can get help easily from here. `}
            <br></br>
            <a className="font-semibold text-indigo-600 dark:text-indigo-400">
              Many Reputed Lawyers
            </a>
            {`  and the contact details given in the Law Point website. So a victim can easily find out his/her desire lawyer. It’s super easy to communicate via phone using the Law Point App`}
          </p>
          <div className="mt-8">
            <Link href={`/lawyers`} passHref>
              <Button as="a">Lawyers Info</Button>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto max-w-xl mt-16 ">
          <span className="absolute inset-y-2/4 right-0 -z-10 h-96 max-h-full w-96 max-w-full -translate-y-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/10 blur-2xl" />
          <ImageAnimation animationData={LawyerImage} />
        </div>
      </div>
    </section>
  );
};

export default LawyerSection;
