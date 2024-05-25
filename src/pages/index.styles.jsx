import styled from "styled-components";

export const PageContainer = styled.div`
min-height: 80vh;
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
position: relative;
`;

export const PageContent = styled.div`
width: 100%;
max-width: 1200px;
padding-left: 20px;
padding-right: 20px;


`;

export const PageHeader = styled.div`
margin-top: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1200px;
`;

export const FilterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const PageCardContainer = styled.div`
margin-top: 30px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 20px;
justify-content: space-between;
`;

export const FormContainer = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
background-color: var(--primary);
border-radius: 30px;
padding: 30px;
align-items: center;
width: 100%;

`;
export const FormHeader = styled.div`
margin-top: 30px;
width: 100%;
max-width: 500px;
h1{
  margin: 10px 0;
}
span{
  color: var(--detail);
  cursor: pointer;
  font-weight: 700;
}
`;