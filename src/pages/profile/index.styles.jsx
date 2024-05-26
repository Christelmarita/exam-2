import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
`;

export const Avatar = styled.div`
  position: relative;
  margin-right: 1rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const VenueManagerMark = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
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

export const UserDetails = styled.div`
  h1 {
    margin: 0;
    font-size: 2rem;
  }
  p {
    margin: 0.5rem 0;
  }
`;

export const Section = styled.section`
  margin: 2rem 0;
`;

export const ListGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.5rem;
  background: #f4f4f4;
  align-items: center;

  span {
    word-wrap: break-word;
  }

  strong {
    font-weight: bold;
  }
`;

export const ListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.5rem;
  background: #f4f4f4;
  align-items: center;
  margin: 10px 0;

  span {
    display: block ruby;
  }

  strong {
    font-weight: bold;
  }
`;

export const ListImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const ListDetails = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0.25rem 0;
  }
`;

export const ListDates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  p {
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const EditBtn = styled.button`
  width: 150px;
  background-color: var(--detail);
  color: var(--primary);
  border: none;
  padding: 5px;
  margin: 10px 0;
  border-radius: 0px;
  cursor: pointer;

  &:hover {
    background-color: var(--third);
    color: var(--lines);
    border: 0.8px solid var(--lines);
  }
`;

export const DeleteBtn = styled(EditBtn)`
  background: #e74c3c;

  &:hover {
    background: #c0392b;
    color: var(--primary);
  }
`;

export const UploadInput = styled.input`
  margin-top: 10px;
  display: block;
  width: 250px;
`;

export const UploadButton = styled.button`
  margin-top: 10px;
  background-color: var(--secondary);
  color: var(--primary);
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--detail);
  }
`;
