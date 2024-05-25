import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: var(--primary);
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
  border-bottom: 0.8px solid rgba(0, 0, 0, 0.1);

  &.scrolled {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 10px 20px;
  }
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-container img {
    height: 50px;
  }

  .logo-container h1 {
    color: var(--secondary);
    font-size: 2.3rem;
  }

  @media (max-width: 768px) {
    .logo-container h1 {
      font-size: 1.8rem;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  gap: 20px; /* Adjust gap as needed */
  align-items: center;

  button {
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    background-color: var(--primary);
    padding: 20px 0;
    gap: 10px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: var(--secondary);
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--primary);
    position: absolute;
    top: 70px;
    left: 0;
    padding: 20px 0;

    button {
      width: 100%;
      text-align: center;
      padding: 10px 0;
    }
  }
`;
