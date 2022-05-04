import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Main from './components/Main';
import WorkExperiencePage from './components/WorkExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={lightTheme}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
