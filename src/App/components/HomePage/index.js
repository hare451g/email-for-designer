import React from 'react';

import TopNavigationBar from '../TopNavigationBar';
import Hero from '../Hero';
import DescriptionSection from '../DescriptionSection';
import FreeTrialSection from '../FreeTrialSection';
import Footer from '../Footer';

// styled
import { HomeLayout } from './styled';

function HomePage() {
  return (
    <HomeLayout>
      <TopNavigationBar />
      <Hero />
      <DescriptionSection />
      <FreeTrialSection />
      <Footer />
    </HomeLayout>
  );
}

export default HomePage;
