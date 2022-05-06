import bgImg from '../assets/projects-bg.jpg';
import styled from 'styled-components';
import LogoComponent from './subComponents/LogoComponent';
import PowerButton from './subComponents/PowerButton';
import SocialIcons from './subComponents/SocialIcons';

const MainContainer = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, .8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 5rem;
`

const ProjectsPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
      </Container>
    </MainContainer>
  )
}

export default ProjectsPage;