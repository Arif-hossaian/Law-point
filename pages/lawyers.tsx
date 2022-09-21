import React, { useRef, useState } from 'react';
import LayerInfo from '../components/LawyerInfo/LawyerInfo';
import SEO from '../components/SEO/SEO';
import Container from '../layout/Container';

export const data = [
  {
    _id: 1,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663684873/lawyers/z0db1zzgphskjqq5dxgk.png',
    name: 'Khan Khalid Adnan',
    keyPracticingArea:
      'Arbitration & ADR; banking & finance; corporate & commercial; litigation; real estate',
    designation: 'Associates',
    phone: 'tel:+880 2471 24915',
    phone2: '',
    email: 'mailto:kkadnan@ksrabd.com',
  },
  {
    _id: 2,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663684969/lawyers/ek58qc30zt8xbpprthsg.png',
    name: 'Md. Yousuf Ali',
    designation: 'HPL Plewka & Coll',
    keyPracticingArea:
      'Corporate; business consulting; arbitration; tax; business restructuring; litigation',
    phone: 'tel:+8801713382999',
    phone2: 'tel:+88028872310',
    email: 'mailto:ali@attorneysbd.com',
  },
  {
    _id: 3,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663688167/lawyers/llej68u069ub0q5rez1a.png',
    name: 'Imtiaz Uddin Ahmad Asif',
    designation: 'Aequitas Chambers',
    keyPracticingArea:
      'Corporate & commercial; inbound investment; joint ventures; M&A;finance',
    phone: 'tel:+880 1711 595 261',
    phone2: '',
    email: 'mailto:asif@aequitaschambersbd.com',
  },
  {
    _id: 4,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663739092/lawyers/rzrysyqtlbgwalkgui4z.png',
    name: 'Nasirud Doulah',
    designation: 'Construction lawyer',
    keyPracticingArea:
      'Corporate; finance; infrastructure; M&A; asset & lease finance',
    phone: 'tel:+880 1711 506 015',
    phone2: '',
    email: 'mailto:ndoulah@doulah.com',
  },
  {
    _id: 5,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663739373/lawyers/ewktp0z2xmt8eslvj9we.png',
    name: 'Shamsud Doulah',
    designation: 'Corporate lawyer',
    keyPracticingArea:
      'Corporate & commercial; litigation; IP enforcement; dispute resolution',
    phone: 'tel:+880 1911 482 175',
    phone2: '',
    email: 'mailto:sdoulah@doulah.com',
  },
  {
    _id: 6,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663739568/lawyers/i9os1u0eotbbipq6rnqw.png',
    name: 'M Imtiaz Farooq',
    designation: 'Advocate of the Supreme Court',
    keyPracticingArea:
      'Arbitration & ADR; corporate & commercial; infrastructure; power & energy finance',
    phone: 'tel:+880 1711 531 300',
    phone2: '',
    email: 'mailto:imtiaz@farooqandassociates.com',
  },
  {
    _id: 7,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663739759/lawyers/ufvnmtujzxdos9ozsqf6.png',
    name: 'Nihad Kabir',
    designation: 'Associates',
    keyPracticingArea: 'Corporate & commercial; project finance; banking',
    phone: 'tel:+880 1711 564 647',
    phone2: '',
    email: 'mailto:nihad@siaalaw.com',
  },
  {
    _id: 8,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663739910/lawyers/vvglrxs2su413tgkuf7v.png',
    name: 'Mydul Haque Khan',
    designation: 'Barrister',
    keyPracticingArea:
      'Banking & finance; corporate & commercial; structured finance',
    phone: 'tel:+880 1768 054 385',
    phone2: '',
    email: 'mailto:mydulkhan@lexjurisbd.com',
  },
  {
    _id: 9,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663740080/lawyers/njqdy0ph2reyhhjxxciu.png',
    name: 'Wahid Sadiq Khan',
    designation: 'Obiter Dictum',
    keyPracticingArea:
      'Employment; corporate & commercial; crime; licensing & franchising; joint venture',
    phone: 'tel:+880 1730 481 628',
    phone2: '',
    email: 'mailto:wahidsadiq28@gmail.com',
  },
  {
    _id: 10,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663740312/lawyers/ax9t72h781i5ee5lywje.png',
    name: 'Amina Khatoon',
    designation: 'Corporate lawyer',
    keyPracticingArea:
      'Corporate & commercial; inbound investment; M&A; power & energy; taxation',
    phone: 'tel:+880 1711 027 377',
    phone2: '',
    email: 'mailto:akhatoon@doulah.com',
  },
  {
    _id: 11,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663740457/lawyers/yvgrehpqfojual4ryblu.png',
    name: 'Saqeb Mahbub',
    designation: 'barrister and Advocate of Supreme Court',
    keyPracticingArea:
      'Arbitration & ADR; corporate & commercial; labour & employment; litigation; M&A',
    phone: 'tel:+880 1725 150 912',
    phone2: '',
    email: 'mailto:Saqeb.mahbub@mahbub-law.com',
  },
  {
    _id: 12,
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1663740586/lawyers/soy3zo3n4dg2hbliii9n.png',
    name: 'ABM Hamidul Mishbah',
    designation: 'Corporate lawyer',
    keyPracticingArea:
      'Technology transfer & franchise; media, entertainment; IT & telecommunications',
    phone: 'tel:+880 1727 444 888',
    phone2: '',
    email: 'mailto:mishbah@oldbaileybd.com',
  },
];

const Lawyer = () => {
  return (
    <>
      <SEO title="Lawyers information || Online law management application" />
      <Container>
        <h1 className="text-5xl font-light mt-28 text-center pb-10">
          Lawyers information
        </h1>

        <div className=" mx-auto px-5 max-w-screen-xl grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-10">
          {data.length !== 0 ? (
            data.map(
              ({
                _id,
                name,
                keyPracticingArea,
                image,
                designation,
                phone,
                phone2,
                email,
              }) => (
                <LayerInfo
                  key={_id}
                  name={name}
                  keyPracticingArea={keyPracticingArea}
                  image={image}
                  designation={designation}
                  phone={phone}
                  phone2={phone2}
                  email={email}
                />
              )
            )
          ) : (
            <p className="mt-24 text-center">Loading...</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Lawyer;
