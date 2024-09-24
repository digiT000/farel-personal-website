import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/project";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ProjectDetail from "./pages/details/projectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-project/:title" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
