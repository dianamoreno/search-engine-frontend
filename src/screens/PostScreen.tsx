import React, { ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost } from '../utils/data';

const PostScreen: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const params = useParams();

  const post = params.postId ? getPost(parseInt(params.postId, 10)) : null;
  const defaultImage = require('../images/temp.jpg');

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
      {post ? (
        <>
          <h2>New post Title</h2>
          <img src={defaultImage} className="post-image" />
          <p>{post.name}</p>
        </>
      ) : (
        <p>Resource not found!</p>
      )}
    </main>
  );
};

export default PostScreen;
