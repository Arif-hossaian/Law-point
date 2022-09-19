import React, { useState } from 'react';
import LayerInfo from '../components/LayerInfo/LayerInfo';
import SEO from '../components/SEO/SEO';
import Container from '../layout/Container';

export const data = [
  {
    _id: 1,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1629093604/ecommerce-products/shirt5_gqrdst.jpg',
    name: 'Mr. Sanwar Hossain',
    designation: 'Lawyer',
    content:
      'Admiralty and Maritime, Banking and Finance, Business Law, Commercial Litigation, Corporate Litigation',
    address: '4/A/1 (3rd floor), Road no: 2, Gulshan-1, Dhaka 1212',
    phone: '+880 1770-295000',
    personalWebsite: 'https://shossainandassociates.com/',
  },
  {
    _id: 2,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1629093604/ecommerce-products/shirt5_gqrdst.jpg',
    name: 'Barrister Ahmed Nadim Abdullah',
    designation: 'Barrister',
    content: '',
    address:
      'Premier FM Heights, 1st Floor, House No. 88, Road - 10/1, Block – D, Niketon, Gulshan, Dhaka 1212',
    phone: '+8801819212002',
  },
  {
    _id: 3,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1629093604/ecommerce-products/shirt5_gqrdst.jpg',
    name: 'Ms. Fatema Tuz Bushra',
    designation: 'Lawyer',
    content: '',
    address:
      'Premier FM Heights, 1st Floor, House No. 88, Road - 10/1, Block – D, Niketon, Gulshan, Dhaka 1212',
    phone: '+8801819212002',
    personalWebsite: '',
  },
  {
    _id: 4,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1629093604/ecommerce-products/shirt5_gqrdst.jpg',
    name: 'Mr. Sakib  Sikder',
    designation: 'Lawyer',
    content: '',
    address: 'Apartment A2, House-31, Road-4, Block F, Banani, Dhaka 1213',
    phone: '+880 17 07108000',
    personalWebsite: '',
  },
];

const Lawyer = () => {
  const [openKey, setOpenKey] = useState();

  const handleToggle = (key: React.SetStateAction<any>) => {
    setOpenKey(openKey !== key ? key : null);
  };
  return (
    <>
      <SEO title="Layer info page || Lawpoint" />
      <Container>
        <div className="mt-28 space-y-6 mx-auto max-w-screen-lg">
          {data &&
            data.map(
              ({
                _id,
                name,
                content,
                image,
                designation,
                address,
                personalWebsite,
                phone,
              }) => (
                <LayerInfo
                  key={_id}
                  name={name}
                  content={content}
                  image={image}
                  designation={designation}
                  address={address}
                  personalWebsite={personalWebsite}
                  phone={phone}
                  toggle={handleToggle}
                  open={openKey === name}
                  _id={0}
                />
              )
            )}
        </div>
      </Container>
    </>
  );
};

export default Lawyer;
