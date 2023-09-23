import { styled } from 'styled-components';

export const Button = styled.button`
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  background: ${(props) => (props.isSelected ? '#fff' : '#aeccea')};
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;
  width: 100px;
  height: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
`;
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem 0;
  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
