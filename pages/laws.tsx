import SEO from '../components/SEO/SEO';
import Container from '../layout/Container';
import { widontString } from '../utils/widontString';

export default function DisplayAllLaws() {
  return (
    <>
      <SEO title="Displaying All Laws || Law point" />
      <Container>
        <div className="mx-auto w-full mt-28 max-w-screen-sm">
          <div className="pb-8">
            <div className="sm:text-center">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
                All laws
              </h1>
              <p className="mb-4 text-lg">
                {widontString('Displaying all Laws...')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
