import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Footer.css';
import Footer from './Footer.jsx';
import ToDoList from './ToDoList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
    <Footer />
  </StrictMode>,
)
