import React, { ReactElement, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';
import { getPostById } from '../redux/slices/postsSlice';
import { useSelector } from 'react-redux';
import { selectPost, selectStatus } from '../redux/slices/postsSlice';
import settings from '../settings';

const PostScreen: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;
  const post = useSelector(selectPost);
  const loading = useSelector(selectStatus);
  const defaultImage = require('../images/temp.jpg');
  const [image, setImage] = useState(defaultImage);

  useEffect(() => {
    dispatch(getPostById(postId));
  }, [postId]);

  useEffect(() => {
    if (Object.keys(post).length !== 0) {
      setImage(settings.staticUrl + post.attributes.photo.data.attributes.url);
    }
  }, [post]);

  return (
    <main className="post-main">
      <div
        onClick={() => {
          navigate('/search');
        }}
        className="search-btn-submit"
      >
        Go Back
      </div>
      {loading && (
        <ReactLoading
          type={'spin'}
          color={'#00c3ff'}
          height={36}
          width={36}
          className="loading"
        />
      )}
      {Object.keys(post).length !== 0 ? (
        <>
          <h2>{post.attributes.title}</h2>
          <img src={image} className="post-image" />
          <p>{post.attributes.description}</p>
        </>
      ) : (
        <p>Resource not found!</p>
      )}
    </main>
  );
};

export default PostScreen;
