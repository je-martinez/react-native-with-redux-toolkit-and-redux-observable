import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from 'models/posts.models';

interface PostsState {
  loadingFetchPost: boolean;
  posts: Post[];
  errorFetchPost: boolean;
}

const initialState = {
  loadingFetchPost: false,
  posts: [],
  errorFetchPost: false,
} as PostsState;

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostStart(state: PostsState) {
      state.loadingFetchPost = true;
      state.errorFetchPost = false;
    },
    fetchPostSucesss(state: PostsState, action: PayloadAction<Post[]>) {
      state.loadingFetchPost = false;
      state.posts = [...action.payload];
    },
    fetchPostFailed(state: PostsState) {
      state.loadingFetchPost = false;
      state.errorFetchPost = true;
    },
  },
});

export const { fetchPostStart, fetchPostSucesss, fetchPostFailed } =
  postsSlice.actions;
