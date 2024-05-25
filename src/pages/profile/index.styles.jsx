import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin-top: 20px;
  width: 100%;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  background-color: var(--third);
`;

export const ListImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ListDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  p{
    font-size: 0.7rem;
  }
`;

export const ListDates = styled.div`
  margin-left: auto;
  margin-right: 20px;
  text-align: right;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const VenueManagerMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: var(--secondary);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-align: center;
`;

export const DeleteBtn = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const FormBtn = styled.button`
  padding: 10px 20px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-dark);
  }
`;