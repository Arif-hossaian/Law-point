import { GetServerSideProps } from 'next';
import { FC, useEffect, useState } from 'react';
import ClientOnly from '../components';
import Search from '../components/Search/Search';
import SEO from '../components/SEO/SEO';
import Test from '../components/Test';
import Container from '../layout/Container';

const DisplayAllLaws: FC<any> = ({ laws }) => {
  const [list, setList] = useState(laws);
  const [inputSearch, setInputSearch] = useState('');
  const [cusineOptions, setCusineOptions] = useState([
    {
      id: 1,
      label: 'প্রজাতন্ত্র',
      checked: false,
    },
    {
      id: 2,
      label: 'রাষ্ট্র পরিচালনার মূলনীতি',
      checked: false,
    },
  ]);
  const handleChangeChecked = (id: any) => {
    const cusisesStateList = cusineOptions;
    const changeCheckCuisies = cusisesStateList.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setCusineOptions(changeCheckCuisies);
  };
  const applyFilters = () => {
    let updatedList = laws;

    //Cusine checkbox
    const cuisinesChecked = cusineOptions
      .filter((item) => item.checked)
      .map((item) => item.label.trim());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item: any) =>
        cuisinesChecked.includes(item.category)
      );
    }
    //Search Input
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item: any) =>
          item.title.toLowerCase().search(inputSearch.trim()) !== -1
      );
    }

    setList(updatedList);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cusineOptions, inputSearch]);
  if (!list) return <p className="text-center">Loading...</p>;
  return (
    <>
      <SEO title="Displaying All Laws || Online law management application" />
      <Container>
        <div className="mx-auto  mt-28 max-w-screen-lg">
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
            <ClientOnly>
              <Test
                list={list}
                cusineOptions={cusineOptions}
                changeChecked={handleChangeChecked}
              />
            </ClientOnly>
          </div>
        </div>
      </Container>
    </>
  );
};
export default DisplayAllLaws;

export const getServerSideProps: GetServerSideProps<any> = async () => {
  const res = await fetch(`https://law-point-api.herokuapp.com/api/get_laws`);
  const { laws } = await res.json();

  return {
    props: {
      laws,
    },
  };
};
