import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Works from './components/Works';
import Loading from './components/Loading';
import ContactForm from './components/ContactForm';
import { LanguageProvider } from './LanguageContext';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LanguageProvider>
      <Router>
        <div className='portfolio__container portfolio__container-bg-site'>
          <Header setIsLoading={setIsLoading} />
          <Nav />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {isLoading && <Loading />}
        </div>
      </Router>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;