import styled from 'styled-components';

const Container = styled.div`
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

const NavLink = styled.a`
  font-size: 1.75rem;
  font-family: serif;
  font-weight: bold;
  color: #6a4a39;
  text-decoration: none;
  padding: 0 1rem;
`;

export { Container, LeftContainer, RightContainer, NavLink };
