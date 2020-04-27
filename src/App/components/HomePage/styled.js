import styled from 'styled-components';

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.8fr 1fr 1fr;
  grid-template-areas: 'top-navigation-bar top-navigation-bar top-navigation-bar top-navigation-bar' 'hero hero hero hero' 'descriptions descriptions descriptions descriptions' 'furniture furniture furniture furniture';
  background-color: #ffffff;
  .top-navigation-bar {
    grid-area: top-navigation-bar;
    background-color: #ffe0d0;
  }

  .descriptions {
    grid-area: descriptions;
  }

  .furniture {
    grid-area: furniture;
  }
`;

export { HomeLayout };
