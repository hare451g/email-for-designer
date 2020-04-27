import React from 'react';

import LetterLogo from '../../assets/logo.png';

import NavLink from '../NavLink';
import { Container, LeftContainer, RightContainer } from './styled';

function TopNavigationBar() {
  return (
    <Container>
      <LeftContainer>
        <NavLink></NavLink>
        <NavLink>
          <img src={LetterLogo} alt="letter" />
          <span>Letter</span>
        </NavLink>
      </LeftContainer>
      <RightContainer>
        <NavLink>Plugins</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Sign in</NavLink>
        <NavLink isActive>Free Trial</NavLink>
      </RightContainer>
    </Container>
  );
}

export default TopNavigationBar;
