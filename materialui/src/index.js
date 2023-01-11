import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './theme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
<BrowserRouter>
    <App />
  </BrowserRouter>
</ThemeProvider>
 
);

