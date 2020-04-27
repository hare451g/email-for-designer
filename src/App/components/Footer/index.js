import React from 'react';
import {
  FooterContainer,
  FooterContentContainer,
  NavLink,
  CopyrightSection,
} from './styled';

function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <NavLink>About</NavLink>
        <NavLink>Sign In</NavLink>
        <NavLink>Community</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink isActive>Free Trial</NavLink>
        <NavLink>Updates</NavLink>
        <CopyrightSection>
          2019. Terms - Privacy. By the teams behind Greenhouse.
        </CopyrightSection>
      </FooterContentContainer>
    </FooterContainer>
  );
}

export default Footer;
