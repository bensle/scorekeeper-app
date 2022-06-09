import styled from 'styled-components';
export default function Navigation() {
  return (
    <StyledNavigation>
      <StylyedNavButton>Play</StylyedNavButton>
      <StylyedNavButton>History</StylyedNavButton>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  gap: 10px;
`;

const StylyedNavButton = styled.button`
  font-weight: bold;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: silver;
  width: 100%;
  font-family: inherit;
  &:hover {
    background-color: gold;
    transition: 1s;
  }
`;
