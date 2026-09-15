import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import Hope from '@/components/site/Hope';
import WhoWeHelp from '@/components/site/WhoWeHelp';
import ExpertiseTags from '@/components/site/ExpertiseTags';
import Services from '@/components/site/Services';
import HowWePractice from '@/components/site/HowWePractice';
import About from '@/components/site/About';
import Office from '@/components/site/Office';
import FAQ from '@/components/site/FAQ';
import CTA from '@/components/site/CTA';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hope />
        <WhoWeHelp />
        <ExpertiseTags />
        <Services />
        <HowWePractice />
        <About />
        <Office />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
