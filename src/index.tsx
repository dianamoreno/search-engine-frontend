import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SearchScreen from './screens/SearchScreen';
import PostScreen from './screens/PostScreen';
import './index.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/search/:postId" element={<PostScreen />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
