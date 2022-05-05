import styled from "styled-components";
import LogoComponent from "./subComponents/LogoComponent";
import PowerButton from "./subComponents/PowerButton";
import SocialIcons from "./subComponents/SocialIcons";
import { Link } from "react-router-dom";

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
    color: ${props => props.theme.text};
    position: absolute;
    z-index: 1;
  }
`

const Mailto = styled.a`
  top: 2rem;
  right: 2rem;
`

const SkillsLink = styled(Link)`
  bottom: calc(50% - 20px);
  right: 2rem;
  transform: rotate(90deg) translate(-50%, -50%);
`

const ProjectsLink = styled(Link)`
  top: calc(50% - 75px);
  left: 1.3rem;
  transform: rotate(270deg) translate(-50%, -50%);
`

const AboutLink = styled(Link)`
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  color: ${props => props.theme.text};
  text-decoration: none;
`

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <Mailto className="heading" rel="noreferrer" target='_blank' href='mailto:tomas.nagy.tn@gmail.com'>
          <h3>Hire me...</h3>
          
        </Mailto>
        <SkillsLink className="heading" to='/skills'>
          <h2>
            Skills
          </h2>
        </SkillsLink>
        <ProjectsLink className="heading" to='/projects'>
          <h2>
            Projects
          </h2>
        </ProjectsLink>
          <AboutLink className="heading" to='/about'>
            <h2>
              About
            </h2>
          </AboutLink>
      </Container>
    </MainContainer>
  )
}

export default Main;