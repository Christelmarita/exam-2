import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--detail);
  color: white;
  height: 100px;
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  margin-top: 5%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    color: var(--primary);
    margin-bottom: 5px;
  }

  p {
    margin: 0;
  }
`;
