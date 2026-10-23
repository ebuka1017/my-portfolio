import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsList from './pages/ProjectsList';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
