import { AboutUs } from '../components/About-us/AboutUs';
import Banner from '../components/Banner-section/Banner';
import { Laws } from '../components/Laws-section/Laws';
import SEO from '../components/SEO/SEO';
import Container from '../layout/Container';

export default function Home() {
  return (
    <>
      <SEO title="Law Point || Online law management application" />
      <Container>
        <Banner />

        <Laws />
        <AboutUs />
      </Container>
    </>
  );
}
