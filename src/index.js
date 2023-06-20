 import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';

import { persistor, store } from 'redux/store';
import App from 'components/App/App';

import './index.css';

const theme = {
  colors: {
    dark: '#041d51',
    grey: '#313131',
    white: 'white',
    accent: '#739ceda4',
    noActive: '#b3c4e6a3',
    shadow: '1px 2px 2px rgb(0 0 0 / 0.5)',
    shadowAccent: '2px 5px 2px rgb(0 0 0 / 0.5)',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);