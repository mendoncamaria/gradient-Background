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
  min-height: calc(100vh - 3.1rem);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputSubContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const InputStyles = styled.input`
  width: 100px;
  height: 50px;
  border: none;
  padding: 0;
  background-color: transparent;
`;

export const Footer = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 1rem;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: white;
`;
