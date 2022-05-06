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

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Container = styled.div`
  padding: 2rem;

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
`

const SkillsLink = styled(Link)`
  bottom: calc(50% - 20px);
  right: 2rem;
  color: ${props => props.theme.text};
  transform: rotate(90deg) translate(-50%, -50%);
`

const ProjectsLink = styled(Link)`
  top: calc(50% - 75px);
  left: 1.3rem;
  color: ${props => props.click ? props.theme.body : props.theme.text};
  transform: rotate(270deg) translate(-50%, -50%);

  @media screen and (max-height: 600px) {
    left: 3rem;
  }
`

const AboutLink = styled(Link)`
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  color: ${props => props.theme.text};
  text-decoration: none;

  span {
    color: ${props => props.click ? props.theme.body : props.theme.text};

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
  background-color: #000;
  transition: height .5s ease, width 1s ease .5s;
`

const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
        <Container>
          
          <PowerButton />
          <LogoComponent theme={click ? 'dark' : 'light'} />
          <SocialIcons theme={click ? 'dark' : 'light'} />

          <Center onClick={handleClick} click={click}>
            <Hexagon width={click ? 80 : 150} height={click ? 80 : 150} fill='currentColor' />
            <span>click me</span>
          </Center>

          <Mailto className="heading" rel="noreferrer" target='_blank' href='mailto:tomas.nagy.tn@gmail.com'>
            <motion.h3
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
            >Hire me...</motion.h3>
          </Mailto>
          
          <SkillsLink className="heading" to='/skills'>
            <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
            >
              Skills
            </motion.h2>
          </SkillsLink>
          
          <ProjectsLink click={click} className="heading" to='/projects'>
            <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
            >
              Projects
            </motion.h2>
          </ProjectsLink>
          
          <AboutLink click={click} className="heading" to='/about'>
            <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: .9}}
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