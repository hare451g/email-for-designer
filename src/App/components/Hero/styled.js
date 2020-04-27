import styled from 'styled-components';
import HeroBackground from '../../assets/hero_background.svg';
import BigPlane from '../../assets/plane-big.png';
import SunIllustration from '../../assets/sun.png';
import PlanesIllustration from '../../assets/planes.png';
import LuggageIllustration from '../../assets/luggage.png';
import LadderIllustration from '../../assets/ladder.png';

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.9fr 1.1fr 1.4fr;
  grid-template-rows: 1fr 1fr;
  
  grid-template-areas: 'illustration-lamp hero-content illustration-sun illustration-plane'
    'illustration-lamp illustration-plane-big illustration-ladder illustration-luggage';

  grid-area: hero;
  height: 742px;

  .hero-top {
    padding-top: 2rem;
    grid-column: 1/5;
    grid-row: 1;
    background-color: #ffdece;
    background-image: url('${HeroBackground}');
    background-repeat: no-repeat;
    background-size:cover;
    border-bottom: 1.5px solid #FFBDAF;
  }

  .illustration-lamp {
    grid-area: illustration-lamp;
  }

  .hero-content {
    grid-area: hero-content;
    display: flex;
    flex-direction: column;
    

    > h1 {
      font-size: 3rem;
    }

    > p {
      font-size: 1.25rem;
      font-family: sans-serif;
      line-height: 1.75rem;
    }
  }

  .free-trial-button {
    grid-row: 1/3;
    grid-column: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: auto;
  }

  .illustration-plane-big {
    background-image: url('${BigPlane}');
    background-repeat: no-repeat;
    background-position: top;
    grid-area: illustration-plane-big;
  }

  .illustration-sun {
    grid-area: illustration-sun;
    background-image: url('${SunIllustration}');
    background-repeat: no-repeat;
    background-position: bottom;
    width: 400px;
  }

  .illustration-plane {
    grid-area: illustration-plane;
    background-image: url('${PlanesIllustration}');
    background-repeat: no-repeat;
    background-position: bottom;
    grid-column: illustration-sun / 5;
  }

  .illustration-ladder {
    grid-area: illustration-ladder;
    background-image: url('${LadderIllustration}');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 300px;
  }

  .illustration-luggage {
    grid-area: illustration-luggage;
    background-image: url('${LuggageIllustration}');
    background-repeat: no-repeat;
    background-position: bottom center;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  background-color: #333333;
  color: white;
  font-size: 1.25rem;
  font-family: serif;
  font-weight: bold;
`;

export { HeroContainer, Button };
