import styled from 'styled-components';

const HomeLayout = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;

  grid-template-areas:
    'top-navigation-bar top-navigation-bar top-navigation-bar top-navigation-bar'
    'hero hero hero hero'
    'descriptions descriptions descriptions descriptions'
    'free-trial free-trial free-trial free-trial'
    'footer footer footer footer';

  background-color: #ffffff;
`;

export { HomeLayout };
