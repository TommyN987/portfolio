import bgImg from '../assets/projects-bg.jpg';
import styled from 'styled-components';
import LogoComponent from './subComponents/LogoComponent';
import PowerButton from './subComponents/PowerButton';
import SocialIcons from './subComponents/SocialIcons';
import Card from './subComponents/Card';
import { projects } from '../data/projectsData';
import { DarkTheme } from './Themes';
import { useEffect, useRef } from 'react';
import { Hexagon } from './AllSVGs';
import BgTitle from './subComponents/BgTitle';

const MainContainer = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`

const Container = styled.div`
  background-color: rgba(0,0,0, .7);
  height: 400vh;
  position: relative;
  padding: 5rem;
  overflow: hidden;
`

const Main = styled.ul`
  position: fixed;
  top: 15rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  gap: 8rem;
`

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`

const ProjectsPage = () => {

  const ref = useRef(null);
  const hexagon = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      hexagon.current.style.transform = `rotate(${-window.pageYOffset / 6}deg)`;
    }

    window.addEventListener('scroll', rotate)

    return () => window.removeEventListener('scroll', rotate)
  }, []);

  return (
    <MainContainer>
      <Container >
        <LogoComponent theme='dark' />
        <PowerButton />
        <SocialIcons theme='dark' />

        <Main 
          ref={ref}>
          {
            projects.map(project => 
              <Card 
                key={project.id} 
                data={project} />)
          }            
        </Main>
        <Rotate ref={hexagon}>
          <Hexagon fill={DarkTheme.text}></Hexagon>
        </Rotate>
        <BgTitle text='PROJECTS' top='10%' left='10%' />
      </Container>
    </MainContainer>
  )
}

export default ProjectsPage;