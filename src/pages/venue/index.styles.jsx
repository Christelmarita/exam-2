import styled from "styled-components";

export const VenueContainer = styled.div`
  margin-top: 5%;
  padding: 10px;
`;

export const VenueContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const VenueLeft = styled.div`
  width: 50%;
  max-width: 860px;
  margin-right: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const VenueRight = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    margin-top: 0;
    align-self: flex-start;
    width: 100%;
  }
`;

export const VenueTitle = styled.div`
  width: 100%;
  margin: 20px 0;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;

    img {
      height: 20px;
      margin-right: 10px;
    }
  }
`;

export const VenueIcons = styled.div`
  display: flex;
  gap: 25px;

  img {
    height: 20px;
    margin-right: 5px;
  }
`;

export const VenueDescription = styled.div`
    margin-bottom: 20px;
`;

export const VenueOwner = styled.div`
  display: flex;
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const VenueFormContainer = styled.div`
  padding: 20px 0;
  margin-top: 40px;
`;
