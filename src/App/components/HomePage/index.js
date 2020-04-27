import React from 'react';

// styled
import { HomeLayout } from './styled';
import TopNavigationBar from '../TopNavigationBar';
import Hero from '../Hero';

function HomePage() {
  return (
    <HomeLayout>
      <div className="top-navigation-bar">
        <TopNavigationBar />
      </div>
      <Hero />
      <div className="descriptions"></div>
      <div className="furniture"></div>
    </HomeLayout>
  );
}

export default HomePage;
