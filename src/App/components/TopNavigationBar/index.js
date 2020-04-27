import React from 'react';

import LetterLogo from '../../assets/logo.png';
import { Container, LeftContainer, RightContainer, NavLink } from './styled';

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
        <NavLink>Free Trial</NavLink>
      </RightContainer>
    </Container>
  );
}

export default TopNavigationBar;
