import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { I18nProvider } from './i18n';

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <I18nProvider locale="en">
      <App />
    </I18nProvider>
  </React.StrictMode>
);
