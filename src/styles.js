import { styled } from 'styled-components';

export const Button = styled.button`
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;
`;
