import { useState } from 'react';
import {
  Button,
  ButtonContainer,
  Footer,
  FooterLink,
  Heading,
  InputContainer,
  InputStyles,
  InputSubContainer,
  MainContainer,
} from './styles';

function App() {
  const [color1, setColor1] = useState('#d9a7c7');
  const [color2, setColor2] = useState('#fffcdc');
  const [gradientDirection, setGradientDirection] = useState('right');

  return (
    <>
      <MainContainer
        style={{
          backgroundImage: `linear-gradient(to ${gradientDirection}, ${color1}, ${color2})`,
        }}
      >
        <Heading>Gradient Color Selector</Heading>

        <ButtonContainer>
          <Button
            onClick={() => setGradientDirection('top')}
            isSelected={gradientDirection === 'top'}
          >
            Top
          </Button>

          <Button
            onClick={() => setGradientDirection('right')}
            isSelected={gradientDirection === 'right'}
          >
            Right
          </Button>

          <Button
            onClick={() => setGradientDirection('bottom')}
            isSelected={gradientDirection === 'bottom'}
          >
            Bottom
          </Button>

          <Button
            onClick={() => setGradientDirection('left')}
            isSelected={gradientDirection === 'left'}
          >
            Left
          </Button>
        </ButtonContainer>

        <InputContainer>
          <InputSubContainer>
            <InputStyles
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
            {color1.toUpperCase()}
          </InputSubContainer>

          <InputSubContainer>
            <InputStyles
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
            {color2.toUpperCase()}
          </InputSubContainer>
        </InputContainer>
      </MainContainer>
      <Footer>
        &copy; 2023{' '}
        <FooterLink
          href="https://maria-mendonca.vercel.app/"
          target="_self"
        >
          Maria Mendonca
        </FooterLink>
      </Footer>
    </>
  );
}

export default App;
