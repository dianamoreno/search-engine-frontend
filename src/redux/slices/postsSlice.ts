import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { fetchAllPosts, fetchPostById } from './../../services/posts';

interface PostAttributes {
  title: string;
  description: string;
  short_description: string;
  created_date: string;
  photo: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
        url: string;
      };
    };
  };
}
export interface Post {
  id: number;
  attributes: PostAttributes;
}
interface PostState {
  posts: Post[];
  loading: boolean;
  post: Post;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  post: <Post>{},
};

export const getAllPosts = createAsyncThunk(
  'search/fetchAllPosts',
  async (searchParam: string) => {
    const response = await fetchAllPosts(searchParam);
    return (await response.data) as Post[];
  }
);

export const getPostById = createAsyncThunk(
  'users/fetchPostById',
  // if you type your function argument here
  async (postId?: string) => {
    const response = await fetchPostById(postId);
    return (await response.data) as Post;
  }
);

export const postsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      });
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPost = (state: RootState) => state.posts.post;
export const selectStatus = (state: RootState) => state.posts.loading;

export default postsSlice.reducer;
