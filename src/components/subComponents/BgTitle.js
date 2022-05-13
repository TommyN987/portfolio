import styled from 'styled-components';

const Text = styled.h1`
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  color: ${props => `rgba(${props.theme.textRgba}, .3)`};
  font-size: calc(5rem + 5vw);
  font-family: 'Philosopher';
  z-index: 8;
`

const BgTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  )
}
export default BgTitle