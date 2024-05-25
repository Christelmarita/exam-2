import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 70px; 
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

export const NavContent = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;

  div {
    display: flex;
    align-items: flex-end;
    gap: 10px;

    img {
      height: 50px;
    }
  }

  h1 {
    color: var(--secondary);
    font-size: 2.3rem;
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
`;

export const CarouselContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

