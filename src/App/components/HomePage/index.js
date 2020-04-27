import React from 'react';

// styled
import { HomeLayout } from './styled';
import TopNavigationBar from '../TopNavigationBar';
import Hero from '../Hero';
import DescriptionSection from '../DescriptionSection';

function HomePage() {
  return (
    <HomeLayout>
      <TopNavigationBar />
      <Hero />
      <DescriptionSection />
    </HomeLayout>
  );
}

export default HomePage;
