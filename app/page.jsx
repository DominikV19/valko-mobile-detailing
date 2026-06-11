import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhyValko from '@/components/WhyValko';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import BeforeAfter from '@/components/BeforeAfter';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyValko />
        <Process />
        <Pricing />
        <BeforeAfter />
        <Gallery />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
