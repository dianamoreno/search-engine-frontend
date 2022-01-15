import React, { ReactElement } from 'react';
import { CardList } from './CardList';

export const List: React.FC = (): ReactElement => {
  const results = new Array(5).fill(1);

  if (!results.length)
    return <p>Please search by title to get some results!</p>;
  return (
    <div className="search-results-list">
      {results.map((item, index) => (
        <CardList
          key={index}
          uri={''}
          title={'title...'}
          short_desc={'descripcion...'}
          id={index}
        />
      ))}
    </div>
  );
};
