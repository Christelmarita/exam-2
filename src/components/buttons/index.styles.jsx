import styled from 'styled-components';

export const BtnBook = styled.button`
  width: 200px;
  background-color: var(--secondary);
  color: var(--primary);
  padding: 10px 20px;
  text-transform: uppercase;
  font-family: var(--headlineFont);
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: var(--third);
    color: var(--lines);
    border: 0.5px solid var(--lines);
  }
`;

export const BtnForm = styled.button`
  width: 200px;
  background-color: var(--detail);
  color: var(--primary);
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  font-family: var(--headlineFont);
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: var(--third);
    color: var(--lines);
    border: 0.8px solid var(--lines);
  }
`;
