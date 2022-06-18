import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Developer } from './AllSVGs';
import LogoComponent from './subComponents/LogoComponent';
import PowerButton from './subComponents/PowerButton';
import SocialIcons from './subComponents/SocialIcons';
import { LightParticleComponent } from './subComponents/ParticleComponent'

const Main = styled.div`
  background-color: ${props => props.theme.body};
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 40vw;
  min-width: 270px;
  height: 75vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:hover {
    border: 2px solid ${props => props.theme.body};
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
`

const Title = styled.h1`
  font-family: 'Philosopher';
  font-size: calc(1em + 1.5vw);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${Card}:hover & {
    fill: ${props => props.theme.body};
  }
`

const Subtitle = styled.h3`
  font-size: calc(1em + 1vw);
  margin-top: 1rem;
`

const Text = styled.p`
  font-size: calc(1.1em + .7vw);
  margin-left: 2rem;

  @media screen and (max-width: 500px) {
    margin-left: 1rem;
  }
`

const SkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Main>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <LightParticleComponent />
        <Card>
          <Title>
            <Developer width={40} height={40} /> 
            <span>Skills</span>
          </Title>
          <div>
            <Subtitle>CODING SKILLS</Subtitle>
            <Text>HTML, CSS, Sass, JavaScript, TypeScript, React, Node.js, Express, MongoDB, Git, webpack, Jest</Text>
          </div>
          <div>
            <Subtitle>SOFT SKILLS</Subtitle>
            <Text>Fast learner, problem solver, highly motivated, efficient under pressure, good communicator, team player</Text>
          </div>
        </Card>
      </Main>
    </ThemeProvider>
  )
}

export default SkillsPage;