import React from 'react';

import LampIllustration from '../../assets/lamp.png';

import { HeroContainer, Button } from './styled';

function Hero() {
  return (
    <HeroContainer>
      <div className="hero-top" />

      <div className="illustration-lamp">
        <img src={LampIllustration} />
      </div>
      <div className="hero-content">
        <h1>Email For Designers</h1>
        <p>
          Dynamic email tool for creators that doesn't cost a leg. Works with
          Sketch, Figma and XD. Easily import your content and send with your
          favorite API.
        </p>
      </div>
      <div className="free-trial-button">
        <Button>Start Free Trial</Button>
      </div>
      <div className="illustration-plane-big" />
      <div className="illustration-sun"></div>
      <div className="illustration-plane"></div>
      <div className="illustration-ladder"></div>
      <div className="illustration-luggage"></div>
    </HeroContainer>
  );
}

export default Hero;
