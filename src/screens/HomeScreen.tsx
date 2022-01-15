import React from 'react';
import { HomeProps } from '../types/homeTypes';
import logo from '../images/search-engine.svg';
import { Link } from 'react-router-dom';

export const HomeScreen: React.FC<HomeProps> = ({ ...date }) => {
  return (
    <header className="header">
      <p className="title">Welcome to my Search Engine App.</p>
      <p>
        Today is: {date.day} of {date.month} of {date.year}
      </p>
      <img src={logo} className="search-logo" alt="logo" />
      <nav>
        <Link className="link" to="/search">
          Go to Search!
        </Link>
      </nav>
    </header>
  );
};
