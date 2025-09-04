//importing css for the website
import './App.css';

//pages imported here
import Navbar from './Navbar';
import About from './pages/aboutme';
import Home from './pages/home';
import Projects from './pages/projects';

//router import
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
