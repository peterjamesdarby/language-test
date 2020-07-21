import React from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';
import './number-local';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <div>{t('welcome')}</div>
        <div>{t('datekey', { date: new Date() })}</div>
        <div>{numeral(5000).format('$0,0.00')}</div>
      </header>
    </div>
  );
}

export default App;
