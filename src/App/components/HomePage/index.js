import React from 'react';

// styled
import { HomeLayout } from './styled';
import TopNavigationBar from '../TopNavigationBar';

function HomePage() {
  return (
    <HomeLayout>
      <div className="top-navigation-bar">
        <TopNavigationBar />
      </div>
      <div className="hero">
        <div className="illustration-lamp"></div>
        <div className="hero-content"></div>
        <div className="illustration-sun"></div>
        <div className="illustration-plane"></div>
        <div className="illustration-ladder"></div>
        <div className="illustration-luggage"></div>
      </div>
      <div className="descriptions"></div>
      <div className="furniture"></div>
    </HomeLayout>
  );
}

export default HomePage;
