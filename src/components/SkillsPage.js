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
  width: 35vw;
  height: 60vh;
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
  font-size: calc(.6em + 1vw);
`

const Text = styled.p`
  font-size: calc(.4em + 1vw);
  margin-left: 2rem;
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
            <Subtitle>FRONTEND</Subtitle>
            <Text>HTML, CSS, Sass, Bootstrap, JavaScript, TypeScript, React</Text>
          </div>
          <div>
            <Subtitle>BACKEND</Subtitle>
            <Text>Node.js, Express, MongoDB</Text>
          </div>
          <div>
            <Subtitle>MISCELLANEOUS</Subtitle>
            <Text>VSCode, Git, webpack, Jest</Text>
          </div>
        </Card>
      </Main>
    </ThemeProvider>
  )
}

export default SkillsPage;