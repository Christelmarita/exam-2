import styled from 'styled-components';

export const Card = styled.div`
  width: 270px;
  max-width: 100%;
  height: 300px;
  background: var(--third);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.6);
    background: rgba(41, 126, 194, 0.3);
    border-radius: 0px;
  }

  @media (max-width: 578px) {
    width: 350px;
    margin: 20px auto;
  }
`;

export const Image = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardBody = styled.div`
  padding: 10px;
`;

export const Text = styled.div`
  max-width: 100%;
  overflow: hidden;
  height: 100%;
  text-overflow: ellipsis;

  p {
    font-size: 0.8rem;
    margin: 10px 0;
    max-width: 90%;
    overflow: hidden;
  }
`;

export const PageCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: red;
  font-size: 1.5rem;
`;
