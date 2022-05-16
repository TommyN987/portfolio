import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";
import LogoComponent from "./subComponents/LogoComponent";
import PowerButton from "./subComponents/PowerButton";
import SocialIcons from "./subComponents/SocialIcons";
import { Hexagon } from "./AllSVGs";
import Intro from "./Intro";
import  { mediaQueries, LightTheme } from './Themes'

const MainContainer = styled(motion.div)`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Container = styled.div`

  h2,h3,h4,h5,h5 {
    font-family: 'Philosopher', sans-serif;
    font-weight: 400;
  }

  .heading {
    text-decoration: none;
    position: absolute;
    z-index: 1;
  }
`

const Mailto = styled.a`
  top: 2rem;
  right: 2rem;
  color: ${props => props.theme.text};

  @media only screen and (max-width: 50em) {
    color: ${props => props.theme.body}
  }
`

const SkillsLink = styled(Link)`
  bottom: calc(50% - 20px);
  right: 2rem;
  color: ${props => props.theme.text};
  transform: rotate(90deg) translate(-50%, -50%);

  @media only screen and (max-width: 50em) {
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }

  @media screen and (max-width: 30em) {
    right: 1rem
  }
`

const ProjectsLink = styled(Link)`
  top: calc(50% - 75px);
  left: 1.3rem;
  color: ${props => props.click ? props.theme.body : props.theme.text};
  transform: rotate(270deg) translate(-50%, -50%);

  span {
    @media only screen and (max-width: 50em) {
      color: ${props => props.theme.text};
    }
  }

  @media only screen and (max-height: 600px) {
    left: 3rem;
  }

  @media screen and (max-width: 30em) {
    left: .3rem
  }
`

const AboutLink = styled(Link)`
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  color: ${props => props.theme.text};
  text-decoration: none;

  span {
    @media only screen and (min-width: 50em) {
    color: ${props => props.click ? props.theme.body : props.theme.text};
    }
  }

  @media only screen and (max-width: 50em) {
    color: ${props => props.theme.text}
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'}; // TODO: Make it responsive
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Philosopher', sans-serif;
  transition: all 1s ease;

  &>:first-child {
    animation-name: ${rotate}; 
    animation-timing-function: linear;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  &>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
    color: ${props => props.theme.text}
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  background-color: ${props => props.theme.text};
  transition: height .5s ease, width 1s ease .5s;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
        height: 50%;
        right:0;
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;`
      : mediaQueries(50)`
        height: 0;
        width: 0;`
  };
`

const Main = () => {

  const [click, setClick] = useState(false);
  const [path, setPath] = useState('');

  const handleClick = () => setClick(!click);

  const pageTransition = () => {
    if (path === 'about') {
      return { y: '-100%' }
    } else if (path === 'skills') {
      return { x: '-100%'}
    } else if (path === 'projects') {
      return { x: '100%' }
    }
  }

  return (
    <MainContainer
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={() => pageTransition()}
      >
      <DarkDiv click={click} />
        <Container>
          
          <PowerButton />
          <LogoComponent theme={click ? 'dark' : 'light'} />
          <SocialIcons theme={click && window.innerHeight > 800 ? 'dark' : null} />

          <Center onClick={handleClick} click={click}>
            <Hexagon width={click ? 80 : 150} height={click ? 80 : 150} fill={LightTheme.text} />
            <span>click me</span>
          </Center>

          <Mailto 
          click={click}
          className="heading" rel="noreferrer" target='_blank' href='mailto:tomas.nagy.tn@gmail.com'>
            <motion.h3
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
            initial={{
              y: -200,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            >Hire me...</motion.h3>
          </Mailto>
          
          <SkillsLink 
            onClick={() => setPath('skills')}
            click={click}
            className="heading" to='/skills'>
            <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
            initial={{
              y: -200,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            >
              Skills
            </motion.h2>
          </SkillsLink>
          
          <ProjectsLink 
            onClick={() => setPath('projects')}
            click={click}              
            className="heading" to='/projects'>
            <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
            initial={{
              y: -200,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            >
              <span>Pr</span>ojects
            </motion.h2>
          </ProjectsLink>
          
          <AboutLink 
          onClick={() => setPath('about')}
          click={click} className="heading" to='/about'>
            <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
            initial={{
              y: 200,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1
              }
            }}
            >
                <span>Ab</span>out
            </motion.h2>
          </AboutLink>
        
        </Container>

        {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main;