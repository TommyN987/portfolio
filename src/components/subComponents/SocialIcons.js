import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Xing } from "../AllSVGs";
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

    @media screen and (max-width: 30em) {
      left: 1rem
    }
  `

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  
  return (
    <Icons>
      <motion.div
        initial={{transform:'scale(0)'}}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: {
            type: 'spring',
            duration: 1,
            delay: 1.6
          }
        }}>
        <a style={{color: 'inherit'}} rel="noreferrer" target='_blank' href='https://github.com/TommyN987'>
          <Github width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} /></a>
      </motion.div>
      <motion.div
        initial={{transform:'scale(0)'}}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: {
            type: 'spring',
            duration: 1,
            delay: 1.4
          }
        }}>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.linkedin.com/in/tommynagy/'>
          <Linkedin width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </a>
      </motion.div>
      <motion.div
        initial={{transform:'scale(0)'}}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: {
            type: 'spring',
            duration: 1,
            delay: 1.2
          }
        }}>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.facebook.com/tomas.nagy.71/'>
          <Facebook width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </a>
      </motion.div>
      <motion.div
        initial={{transform:'scale(0)'}}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: {
            type: 'spring',
            duration: 1,
            delay: 1
          }
        }}>
        <a rel='noreferrer' style={{color: 'inherit'}} target='_blank' href='https://www.xing.com/profile/Tomas_Nagy9/cv'>
          <Xing width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
        </a>
      </motion.div>
      <Line 
        color={props.theme}
        initial={{ height: 0 }}
        animate={{
          height: '8rem',
          transition: {
            type: 'spring',
            duration: 1,
            delay: 0.8
          }
        }}
        />
    </Icons>
  )
}

export default SocialIcons