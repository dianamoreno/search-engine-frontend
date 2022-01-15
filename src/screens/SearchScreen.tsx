import React, { ReactElement, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Form } from '../components/Search/Form';
import { List } from '../components/Search/List';

const SearchScreen: React.FC = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams({ replace: 'true' });
  const onSubmitCallBack = (value: string) => {
    console.log('oncallback', value);
    setSearchParams(value);
  };

  useEffect(() => {
    //enpoint request
    console.log('enpoint request');
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
