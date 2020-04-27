import styled from 'styled-components';

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.8fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: 'top-navigation-bar top-navigation-bar top-navigation-bar top-navigation-bar' 'hero hero hero hero' 'descriptions descriptions descriptions descriptions' 'furniture furniture furniture furniture';

  .top-navigation-bar {
    grid-area: top-navigation-bar;
    background-color: #ffe0d0;
  }

  .hero {
    display: grid;
    grid-template-columns: 0.6fr 0.9fr 1.1fr 1.4fr;
    grid-template-rows: 1fr 1fr;
    gap: 1px 1px;
    grid-template-areas: 'illustration-lamp hero-content illustration-sun illustration-plane' 'illustration-lamp hero-content illustration-ladder illustration-luggage';
    grid-area: hero;
  }

  .illustration-lamp {
    grid-area: illustration-lamp;
  }

  .hero-content {
    grid-area: hero-content;
  }

  .illustration-sun {
    grid-area: illustration-sun;
  }

  .illustration-plane {
    grid-area: illustration-plane;
  }

  .illustration-ladder {
    grid-area: illustration-ladder;
  }

  .illustration-luggage {
    grid-area: illustration-luggage;
  }

  .descriptions {
    grid-area: descriptions;
  }

  .furniture {
    grid-area: furniture;
  }
`;

export { HomeLayout };
