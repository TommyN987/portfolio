import styled from 'styled-components';
import { Facebook, Github, Instagram, Linkedin } from "../AllSVGs";
import { DarkTheme } from '../Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    svg {
      border-radius: .5rem;
    }

    svg:hover {
      background-color: ${props => props.theme.hoverColor};
      box-shadow: 0 0 8px 6px ${props => props.theme.hoverShadow};
    }

    &>*:not(:last-child) {
      margin: .3rem 0;
    }
  `

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  
  return (
    <Icons>
      <div>
        <a style={{color: 'inherit'}} rel="noreferrer" target='_blank' href='https://github.com/TommyN987'>
          <Github width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} /></a>
      </div>
      <div>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.linkedin.com/in/tommynagy/'>
          <Linkedin width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </a>
      </div>
      <div>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.facebook.com/tomas.nagy.71/'>
          <Facebook width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </a>
      </div>
      <div>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.instagram.com/tommyn987/'>
          <Instagram width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </a>
      </div>
      <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons