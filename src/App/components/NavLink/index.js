import styled from 'styled-components';

const NavLink = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  color: #6a4a39;
  text-decoration: none;
  margin: 0 32px;
  width: fit-content;

  ${(props) =>
    props.isActive &&
    `
    color: #FF7676;
    border-bottom: 4px solid #f8d1be;
  `}
`;

export default NavLink;
