import React from 'react';
import ImageAnimation from '../../shared/ImageAnimation';
import HelplineSupportImage from '../../icons/72879-customer-support-help-support-agent.json';
import Link from 'next/link';
import { Button } from '../Button';

const HelplineSection = () => {
  return (
    <section className="py-16 mx-auto max-w-screen-lg px-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-20">
        <div className="relative mt-8 h-auto w-[350px] rounded-full text-center md:mt-0 md:w-[350px] lg:w-[500px]">
          <span className="absolute inset-y-2/4 right-0 -z-10 h-96 max-h-full w-96 max-w-full -translate-y-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/10 blur-2xl" />
          <ImageAnimation animationData={HelplineSupportImage} />
        </div>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-sm lg:text-left">
          <h2 className="relative text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Helpline
          </h2>
          <span className="mx-auto mt-2 block h-1.5 w-[100px] rounded-full bg-indigo-600 lg:mx-0" />

          <p className="mt-6 break-words text-lg">
            {`With the same time, a victim can get instant help from LAW ENFORCEMENT AGENCIES using the Law Point. Also Flood affected people easily get help to contact with `}
            <br></br>
            <a className="font-semibold text-indigo-600 dark:text-indigo-400">
              “Ministry of Disaster Management and Relief”
            </a>
            {`   their bad time. And also patient can find out the contact details of Ambulance, Doctors, Nurse etc. A large number of features can provide the best services to victim from unwanted situation`}
          </p>
          <div className="mt-8">
            <Link href={`/helpline`} passHref>
              <Button as="a">View Helplines</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelplineSection;
