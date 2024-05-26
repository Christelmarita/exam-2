import styled from 'styled-components';

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
  justify-content: center;
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
  width: 100%;
  max-width: 500px;
  h1 {
    margin: 10px 0;
  }
  span {
    color: var(--detail);
    cursor: pointer;
    font-weight: 700;
  }
`;

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
  position: relative;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  background-size: cover;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(12, 30, 49, 0.3);
    backdrop-filter: blur(5px);
  }
`;

export const HeroText = styled.h1`
  position: relative;
  color: var(--primary);
  font-size: 2rem;
  z-index: 1;
  font-family: var(--headlineFont), sans-serif;
  text-align: center;
  padding: 0 20px;
`;
