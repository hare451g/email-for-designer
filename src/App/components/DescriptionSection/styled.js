import styled from 'styled-components';
import DescriptionBackground from '../../assets/description_background.png';
import BinocularGirlIllustration from '../../assets/binocular_girl.png';
import Stairs from '../../assets/stairs.svg';

const DescriptionLayout = styled.div`
  grid-area: descriptions;
  background-image: url('${DescriptionBackground}');
  background-repeat: no-repeat;
  background-position-y: -316px;
  background-position-x: 0;
  background-size: cover;

  display: grid;
  grid-template-columns: 0.8fr 0.6fr 1fr;
  grid-template-rows: 1.2fr 0.5fr 1fr;
  gap: 1px 1px;
  grid-template-areas: "newsletter-desc . thirdparty-desc"
  ". desc-illustration thirdparty-desc "
  "furniture furniture furniture";
  grid-area: descriptions;

  .desc-illustration {
    grid-area: desc-illustration;
    background-image: url('${BinocularGirlIllustration}');
    grid-column: 2/4;
    grid-row: 1/3;
    background-repeat: no-repeat;
    z-index: 2;
    margin-top: 48px;
  }

  .desc-stairs {
    background-image: url('${Stairs}');
    grid-column: 1;
    grid-row: 1;
    background-repeat: no-repeat;
    background-position: bottom right;
  }

  h2 {
    font-family: 'Gentium Book Basic', serif;
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    font-family: 'Gentium Book Basic', serif;
    line-height: 1.75rem;

    max-width: 250px;
  }

  .newsletter-desc {
    grid-area: newsletter-desc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      width: 250px;
      font-family: 'Gentium Book Basic', serif;
    }
  }

  .thirdparty-desc {
    grid-area: thirdparty-desc;
    
    h2 {
      width: 400px;
      font-family: 'Gentium Book Basic', serif;
    }
  }

  .furniture {
    grid-area: furniture;
    background-color: #ffd9cb;
    border-bottom: 1.5px solid #ffbdaf;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export { DescriptionLayout };
