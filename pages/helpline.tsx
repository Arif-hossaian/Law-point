import { info } from 'console';
import Image from 'next/image';
import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import Container from '../layout/Container';

const contactData = [
  {
    id: 1,
    name: 'National Emergency Service',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663688389/lawyers/eq2bzvavx0s9mfeozorz.png',
    phone: 'tel:+880999',
    height: '200',
  },
  {
    id: 2,
    name: 'Anti-Corruption Commission',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663688684/lawyers/l1ea7abbvbceosmgxfmn.png',
    phone: 'tel:+880106',
    height: '240',
  },
  {
    id: 3,
    name: 'Agricultural Call Centre',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663688953/lawyers/fypgxfvrofwmuwvdxzi2.jpg',
    phone: 'tel:+880106',
    height: '230',
  },
  {
    id: 4,
    name: 'Bangladesh Telecommunications Company Limited',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663737084/lawyers/tehze06rloa412bowjfb.png',
    phone: 'tel:+88016402',
    height: '230',
  },
  {
    id: 5,
    name: 'Health Care Service',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663737414/lawyers/yhkkidsxvgpetyynhjtg.png',
    phone: 'tel:+88016263',
    height: '230',
  },
  {
    id: 6,
    name: 'Advance notice of disaster',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663738147/lawyers/gkymejup5xapw3i9yvxn.png',
    phone: 'tel:+8801090',
  },
  {
    id: 7,
    name: 'Bangladesh Child Helpline',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663738399/lawyers/hx4jhait8xjwj9ijdlzp.png',
    phone: 'tel:+8801098',
  },
  {
    id: 8,
    name: 'Bangladesh Bank Helpline',
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663738518/lawyers/dueqas2o6sxt4wxsdu53.png',
    phone: 'tel:+88016236',
  },
];

const HelpLine = () => {
  return (
    <div>
      <SEO title="Essential Helplines || Online law management application" />
      <Container>
        <h1 className="text-5xl font-light mt-28 text-center pb-10">
          Essential Helplines
        </h1>
        <div className=" mx-auto max-w-screen-lg grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 gap-10">
          {contactData.length !== 0 ? (
            contactData.map((item, _id) => (
              <div key={_id}>
                <Card>
                  <Image
                    src={item.image}
                    alt="Contact logo"
                    height={200}
                    width={200}
                  />

                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-md mt-6 w-auto font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>

                    <div className="mt-5">
                      <Button>
                        <a href={item.phone}>Call Now</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HelpLine;
