import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';

createRoot(document.getElementById('root')).render(
   <>
      <App />
      <Header />
      <Welcome />
      <About />
      <Projects />
      <Contacts />
   </>,
);