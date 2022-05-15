import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from './subComponents/LogoComponent';
import PowerButton from './subComponents/PowerButton';
import SocialIcons from './subComponents/SocialIcons';
import { DarkParticleComponent } from './subComponents/ParticleComponent';
import BgTitle from './subComponents/BgTitle';
import { Link } from 'react-router-dom';

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  border: 2px solid ${props => props.theme.text};
  padding: 2rem;
  color: ${props => props.theme.text};
  z-index: 3;
  width: 55vw;
  height: 60vh;
  line-height: 1.5;
  font-size: calc(.6em + .8vw);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  backdrop-filter: blur(6px);

  @media screen and (max-width: 1020px) {
    position: absolute;
    bottom: 8rem;
    width: 70vw;
  }
  
  @media screen and (max-width: 600px) {
    bottom: 5rem;
  }

  @media screen and (max-width: 440px) {
    font-size: calc(.6em + .2vw);
  }
`

const RouteLink = styled(Link)`
  color: inherit;
  font-weight: 900;
`

const SiteLink = styled.a`
  color: inherit;
  font-weight: 900;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Main>
        <LogoComponent theme='dark' />
        <PowerButton />
        <SocialIcons theme='dark' />
        <BgTitle text='ABOUT' top='10%' left='10%' />
        <Box>
          <p><strong> I am a full-stack web developer based in Bavaria, Germany.</strong></p>
          <p>After working for seven years for the Parliament of the Slovak Republic as a state official specializing in European Union affairs, I have come to the decision to both re-locate and re-qualify. Thus, I started my journey into software development.</p>
          <p>Having a keen eye for the aesthetic, I started on the front-end. After familiarizing myself with front-end tech such as CSS, Sass, JavaScript/TypeScript and React, I have also been adding back-end tech to my scope of expertise, aiming for achieving proficiency in the entirety of the MERN stack. For the implementation, please see my <RouteLink to='/projects'>projects</RouteLink>.</p>
          <p>I will be happy to provide my services to your company. For more information, please see my <SiteLink rel="noreferrer" target='_blank' href='#'>CV</SiteLink>, and do connect with me via any of the social links on the left, or via <SiteLink rel="noreferrer" target='_blank' href='mailto:tomas.nagy.tn@gmail.com'>e-mail</SiteLink>.</p>
        </Box>
      </Main>
      <DarkParticleComponent />
    </ThemeProvider>
  )
};

export default AboutPage