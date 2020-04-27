import styled from 'styled-components';

const Container = styled.div`
  grid-area: top-navigation-bar;
  background-color: #ffe0d0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  padding-bottom: 4rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  align-items: center;
  justify-content: space-evently;
`;

export { Container, LeftContainer, RightContainer };
