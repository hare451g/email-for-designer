import styled from 'styled-components';

const Container = styled.div`
  grid-area: free-trial;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 48px 32px;

  p {
    font-size: 1.5rem;
    font-family: 'Gentium Book Basic', serif;
    text-align: center;
  }
`;

const FreeTrialHeading = styled.h2`
  font-size: 2rem;
  font-family: 'Gentium Book Basic', serif;
`;

export { Container, FreeTrialHeading };
