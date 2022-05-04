import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Facebook, Github, Instagram, Linkedin } from "../AllSVGs"

const SocialIcons =() => {

  const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child) {
      margin: .5rem 0;
    }
  `

  const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.theme.text};
  `

  return (
    <Icons>
      <div>
        <a style={{color: 'inherit'}} rel="noreferrer" target='_blank' href='https://github.com/TommyN987'>
          <Github width={25} height={25} fill='currentColor' /></a>
      </div>
      <div>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.linkedin.com/in/tommynagy/'>
          <Linkedin width={25} height={25} fill='currentColor' />
        </a>
      </div>
      <div>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.facebook.com/tomas.nagy.71/'>
          <Facebook width={25} height={25} fill='currentColor' />
        </a>
      </div>
      <div>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.instagram.com/tommyn987/'>
          <Instagram width={25} height={25} fill='currentColor' />
        </a>
      </div>
      <Line />
    </Icons>
  )
}

export default SocialIcons