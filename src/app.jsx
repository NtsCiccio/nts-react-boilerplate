import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavbarComponent from './components/navbar/navbar';

export default function App() {
  return (
    <div>
      <NavbarComponent />
      <h1>React Boilerplate</h1>
      <FormattedMessage id="welcome" defaultMessage="Welcome to our application!" />
      <FormattedMessage id="description" defaultMessage="This is an example of internationalization in React." />
    </div>
  );
}
