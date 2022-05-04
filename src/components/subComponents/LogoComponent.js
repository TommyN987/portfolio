import styled from 'styled-components';

const LogoComponent = () => {

  const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.theme.text};
    position: fixed;
    font-family: 'Merienda';
    left: 2rem;
    top: 2rem;
    z-index: 3;
  `

  return (
    <Logo>
      TN
    </Logo>
  )
}
export default LogoComponent