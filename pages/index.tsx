import { AboutUs } from '../components/About-us/AboutUs';
import Banner from '../components/Banner-section/Banner';
import { Footer } from '../components/Footer-section/Footer';
import { Navbar } from '../components/Header-section/Navbar';
import { Laws } from '../components/Laws-section/Laws';
import SEO from '../components/SEO/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <header>
        <Navbar />
      </header>
      <Banner />
      <main className="mx-auto max-w-screen-lg px-6 sm:px-8 xl:px-12">
        <Laws />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
