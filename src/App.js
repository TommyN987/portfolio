import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './components/Themes';
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
        <ThemeProvider theme={LightTheme}>
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
