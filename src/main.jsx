import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import About from './components/About.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <App />
      <Header />
      <Welcome />
      <About />
   </StrictMode>,
);