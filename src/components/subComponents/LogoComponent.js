import styled from 'styled-components';
import { DarkTheme } from '../Themes';

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    position: fixed;
    font-family: 'Merienda';
    left: 2rem;
    top: 2rem;
    z-index: 3;
  `

const LogoComponent = (props) => {

  return (
    <Logo color={props.theme}>
      TN
    </Logo>
  )
}
export default LogoComponent