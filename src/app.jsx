import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function App() {
  return (
    <div>
      <h1>React Boilerplate</h1>
      <FormattedMessage id="welcome" defaultMessage="Welcome to our application!" />
      <FormattedMessage id="description" defaultMessage="This is an example of internationalization in React." />
    </div>
  );
}
