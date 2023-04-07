import { ThemeProvider } from 'styled-components';
import { LightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Main from './components/Main';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
