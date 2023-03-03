import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  purple: {
    50: '#fae3ff',
    100: '#e3b2ff',
    200: '#ca7fff',
    300: '#ae4cff',
    400: '#901aff',
    500: '#8500e6',
    600: '#7400b4',
    700: '#5c0082',
    800: '#3c0050',
    900: '#1a0020',
  },
}

const theme = extendTheme({ colors })



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
