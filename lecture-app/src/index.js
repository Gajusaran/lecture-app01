import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraBaseProvider,theme } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
    <App/>
    </ChakraBaseProvider>
  </StrictMode>
);
