import React, { ReactElement } from 'react';
import './App.css';
import { HomeScreen } from './screens/HomeScreen';
import { homePropsData } from './utils/data';

const App: React.FC = (): ReactElement => {
  return (
    <main className="main">
      <HomeScreen {...homePropsData} />
    </main>
  );
};

export default App;
