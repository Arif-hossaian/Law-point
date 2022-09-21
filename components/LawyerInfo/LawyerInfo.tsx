import Image from 'next/image';
import React, { FC } from 'react';
import AcademicIcon from '../../icons/AcademicIcon';
import { Button } from '../Button';
import { Card } from '../Card/Card';

interface LawyerInfoProps {
  name: string;
  image: string;
  designation: string;
  keyPracticingArea: string;

  phone: any;
  phone2: any;
  email: string;
}

const LawyerInfo: FC<LawyerInfoProps> = ({
  name,
  keyPracticingArea,
  image,
  designation,
  phone,
  phone2,
  email,
}) => {
  return (
    <div>
      <div className="w-full  h-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10 mt-5 px-5">
          <Image
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={image}
            alt="Lawyer-image"
            layout="fixed"
            height={250}
            width={250}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-5">
            {name}
          </h5>
          {/* lawyer designation start */}
          <div className="flex justify-between items-center">
            <AcademicIcon />
            <p className="text-light text-indigo-400 ml-1">{designation}</p>
          </div>
          {/* lawyer designation end */}
          <span className="text-md text-gray-500 dark:text-gray-400 text-center mt-4">
            {keyPracticingArea}
          </span>
          <div className="flex mt-4 space-x-5 md:mt-6 items-center justify-between">
            <Button>
              <a href={phone}>Call Now</a>
            </Button>
            <Button
              variant="outline"
              size="md"
              className="bg-transparent   font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <a href={email}>Send Email</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerInfo;
