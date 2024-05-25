import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 0;
  width: 100%;
  max-width: 500px;
`;

export const FormItem = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    height: 20px;
    position: absolute;
    right: 20px;
  }

  label {
    color: var(--detail);
    font-size: 0.9rem;
  }

  input {
    border: 0.8px solid var(--lines);
    height: 40px;
    width: 100%;
    font-size: 1rem;
    padding-left: 10px;
    border-radius: 8px;

    &:focus {
      outline: none;
      border-color: var(--secondary);
    }

    &::placeholder {
      color: var(--secondary);
    }
  }
`;


export const FormBtnContainer = styled.div`
  margin: 20px 0;
`;

export const FormItemCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid var(--detail) 2px;
    cursor: pointer;

    &:checked {
      background: var(--detail);
    }
  }

  label {
    color: var(--lines);
    font-size: 1rem;
  }
`;

export const FormSearch = styled.form`
  width: 100%;
  max-width: 400px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;

  img {
    height: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%); 
  }
`;

export const FormFilter = styled.form`
  display: flex;
  gap: 10px;

  @media (max-width: 910px) {
    flex-direction: column;
  }
`;

export const FormFilterItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    &[type="date"] {
      &::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        z-index: 1;
      }
    }
  }

  img {
    height: 20px;
    position: absolute;
    left: 20px;
  }
`;

export const FormBooking = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  border: 0.8px solid var(--lines);
  border-radius: 10px;
  padding: 20px;
  width: fit-content;

  input {
    &[type="date"] {
      &::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        z-index: 1;
      }
    }
  }
`;

export const FormGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


export const FormBookingItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;

  label {
    color: var(--detail);
    font-size: 0.9rem;
    margin: 10px 0 5px 0;
  }
`;

export const TotalPrice = styled.div`
  margin: 20px 0;
  padding: 10px;
  align-items: center;
  gap: 10px;

  h3 {
    margin: 0;
  }
`;

export const FormImageContainer = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-left: 10px;
    background-color: var(--detail);
  }
`;

export const NavSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--primary);
  padding: 10px 0; /* Add padding to create space between NavContent and NavSearch */
  height: 70px; /* Adjust height as needed */
  align-items: center;

  div {
    max-width: 1200px;
    width: 100%;
  }
`;
