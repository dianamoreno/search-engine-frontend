import React, { ReactElement, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Form } from '../components/Search/Form';
import { List } from '../components/Search/List';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../redux/slices/postsSlice';

const SearchScreen: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useState('');
  const onSubmitCallBack = (value: string) => {
    setSearchParams(value);
  };

  useEffect(() => {
    dispatch(getAllPosts(searchParams));
  }, [searchParams]);

  return (
    <main className="search-main">
      <div className="search-content">
        <nav>
          <Form
            placeHolder="Search by Title"
            buttonText="GO!"
            onSubmitHandler={onSubmitCallBack}
          />
          <List />
        </nav>
        <Outlet />
      </div>
    </main>
  );
};

export default SearchScreen;
