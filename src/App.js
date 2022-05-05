import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes';
import GlobalStyle from './globalStyles';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Main from './components/Main';
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
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
