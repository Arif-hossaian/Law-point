import { GetStaticProps } from 'next';
import { FC } from 'react';
import SEO from '../components/SEO/SEO';
import Test from '../components/Test';
import Container from '../layout/Container';

const DisplayAllLaws: FC<any> = ({ laws }) => {
  return (
    <>
      <SEO title="Displaying All Laws || Law point" />
      <Container>
        <div className="mx-auto  mt-28 max-w-screen-2xl">
          <div className="pb-8">
            <div className="sm:text-center">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
                Displaying all Laws
              </h1>
            </div>
            {/* <div className="flex justify-between items-center">
              <div className="flex-initial w-64">123</div>
              <div className="flex-initial w-32">132132123</div>
            </div> */}
            <Test laws={laws} />
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
