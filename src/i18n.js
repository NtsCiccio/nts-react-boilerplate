import PropTypes from 'prop-types';
import React from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from './locales/en.json';
import itMessages from './locales/it.json';

const messages = {
  en: enMessages,
  it: itMessages,
};

const defaultLocale = 'en';

export function I18nProvider({ children, locale = defaultLocale }) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

I18nProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
