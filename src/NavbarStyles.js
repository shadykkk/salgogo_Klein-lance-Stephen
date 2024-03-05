// NavbarStyles.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: ${({ isNavbarCollapsed }) => (isNavbarCollapsed ? 'none' : 'flex')};
  flex-direction: column;
  align-items: flex-start; /* Align items to the start (left side) */
  margin-left: 10px; /* Add some margin to the left for spacing */

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center; /* Align items to the center for mobile view */
    margin: 0; /* Reset margin for mobile view */
  }
`;

export const NavbarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavbarListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
`;

