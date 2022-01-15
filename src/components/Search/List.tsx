import React, { ReactElement } from 'react';
import ReactLoading from 'react-loading';
import settings from '../../settings';
import { CardList } from './CardList';
import { useSelector } from 'react-redux';
import { selectPosts, selectStatus } from '../../redux/slices/postsSlice';

export const List: React.FC = (): ReactElement => {
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectStatus);

  if (!posts.length) return <p>Please search by title to get some results!</p>;

  return (
    <>
      {loading ? (
        <ReactLoading
          type={'spin'}
          color={'#00c3ff'}
          height={36}
          width={36}
          className="loading"
        />
      ) : (
        <div className="search-results-list">
          {posts.map(({ id, attributes }, index) => {
            const image =
              attributes.photo.data.attributes.formats.thumbnail.url;
            return (
              <CardList
                key={index}
                uri={image}
                title={attributes.title}
                short_desc={attributes.short_description}
                id={id}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
