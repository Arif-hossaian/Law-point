import { GetStaticProps } from 'next';
import { FC, SetStateAction, useEffect, useState } from 'react';
import ClientOnly from '../components';
import FilterPanel from '../components/FilterPanle/FilterPanel';
import Search from '../components/Search/Search';
import SEO from '../components/SEO/SEO';
import Test from '../components/Test';
import Container from '../layout/Container';

const DisplayAllLaws: FC<any> = ({ laws }) => {
  const [list, setList] = useState(laws);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [inputSearch, setInputSearch] = useState('');
  const [resultsFound, setResultsFound] = useState(true);
  const [cusineOptions, setCusineOptions] = useState([
    {
      value: 'প্রজাতন্ত্র',
      label: 'প্রজাতন্ত্র(republic)',
      checked: false,
    },
    {
      value: 'রাষ্ট্র পরিচালনার মূলনীতি',
      label: 'রাষ্ট্র পরিচালনার মূলনীতি(Principles of State Administration)',
      checked: false,
    },

    // {
    //   id: 1,
    //   checked: false,
    //   label: 'American',
    // },
    // {
    //   id: 2,
    //   checked: false,
    //   label: 'Chines',
    // },
    // {
    //   id: 3,
    //   checked: false,
    //   label: 'Italian',
    // },
  ]);
  // const filters = [
  //   {
  //     options: [
  //       {
  //         value: 'প্রজাতন্ত্র',
  //         label: 'প্রজাতন্ত্র(republic)',
  //         checked: false,
  //       },
  //       {
  //         value: 'রাষ্ট্র পরিচালনার মূলনীতি',
  //         label:
  //           'রাষ্ট্র পরিচালনার মূলনীতি(Principles of State Administration)',
  //         checked: false,
  //       },
  //     ],
  //   },
  // ];

  // const applyFilters = () => {
  //   let updatedList = laws;

  //   //Cusine checkbox
  //   const cuisinesChecked = cusineOptions
  //     .filter((item) => item.checked)
  //     .map((item) => item.label.toLowerCase());

  //   if (cuisinesChecked.length) {
  //     updatedList = updatedList.filter((item: any) =>
  //       cuisinesChecked.includes(item.cuisine)
  //     );
  //   }

  //   //Search Input
  //   if (inputSearch) {
  //     updatedList = updatedList.filter(
  //       (item: any) =>
  //         item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
  //         -1
  //     );
  //   }

  //   setList(updatedList);
  // };

  // useEffect(() => {
  //   applyFilters();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [
  //   selectedRating,
  //   selectedCategory,
  //   cusineOptions,
  //   selectedPrice,
  //   inputSearch,
  // ]);

  return (
    <>
      <SEO title="Displaying All Laws || Online law management application" />
      <Container>
        <div className="mx-auto  mt-28 max-w-screen-2xl">
          <div className="pb-8">
            <div className="sm:text-center">
              <h1 className="text-5xl font-light mt-28 text-center pb-10">
                Displaying all Laws
              </h1>
            </div>
            <Search
              value={inputSearch}
              changeInput={(e: any) => setInputSearch(e.target.value)}
            />
            <div className=""></div>
            <ClientOnly>
              <Test list={list} />
            </ClientOnly>
          </div>
        </div>
      </Container>
    </>
  );
};
export default DisplayAllLaws;

export const getStaticProps: GetStaticProps<any> = async () => {
  const res = await fetch(`https://law-point-api.herokuapp.com/api/get_laws`);
  const { laws } = await res.json();

  return {
    props: {
      laws,
    },
  };
};
