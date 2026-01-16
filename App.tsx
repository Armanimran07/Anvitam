import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Process from './pages/Process';
import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Why from './pages/Why';
import Contact from './pages/Contact';
import Services from './pages/Services'; // New
import ServiceDetail from './pages/ServiceDetail'; // New
import Shop from './pages/Shop'; // New
import Admin from './pages/Admin';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { ContentProvider } from './context/ContentContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time (e.g., 2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContentProvider>
      <CustomCursor />
      {/* Leaves Animation Background removed from here - moved to Home.tsx */}

      {isLoading ? (
        <Loader />
      ) : (
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/why" element={<Why />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/process/:phase" element={<Process />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </HashRouter>
      )}
    </ContentProvider>
  );
};

export default App;