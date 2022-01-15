import React, { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import settings from '../../settings';
import { CardProps } from '../../types/searchTypes';
import { useLocation, NavLink } from 'react-router-dom';

export const CardList: React.FC<CardProps> = ({
  uri,
  title,
  short_desc,
  id,
}): ReactElement => {
  const { width } = useWindowDimensions();
  //the max with is calculated using the width and margins of their containers
  const maxWidthThumbnail = (width * 0.8 - 70) * 0.2;
  const defaultImage = uri
    ? { uri: `${settings.staticUrl}${uri}` }
    : require('../../images/temp.jpg');
  const location = useLocation();
  const to = `/search/${id}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="search-card-image">
        <img src={defaultImage} style={{ maxWidth: maxWidthThumbnail }} />
      </div>
      <div className="search-card-text">
        <NavLink to={to + location.search} key={id}>
          <div className="search-card-title">{title}</div>
        </NavLink>
        <div className="search-card-shortdesc">{short_desc}</div>
      </div>
    </div>
  );
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
