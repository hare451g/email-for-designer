import styled from 'styled-components';

import BaseNavLink from '../NavLink';

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: #fffcfb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContentContainer = styled.div`
  padding-top: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: '. . .' '. . .' 'copyright-section copyright-section copyright-section';
  gap: 32px 32px;
  max-width: 720px;
`;

const NavLink = styled(BaseNavLink)``;

const CopyrightSection = styled.div`
  grid-area: copyright-section;
  padding-top: 16px;
  color: #bfbdbc;
  text-align: center;
`;

export { FooterContainer, FooterContentContainer, NavLink, CopyrightSection };
