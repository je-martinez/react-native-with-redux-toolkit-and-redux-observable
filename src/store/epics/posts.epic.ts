import { Action, createAction } from '@reduxjs/toolkit';
import { Post } from 'models/posts.models';
import {
  Observable,
  catchError,
  concat,
  filter,
  map,
  mergeMap,
  of,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  fetchPostFailed,
  fetchPostStart,
  fetchPostSucesss,
} from 'store/slices/posts.slice';

export const getPosts = createAction<void>('posts/fetch-posts');

const fetchPosts = concat(
  of(fetchPostStart()),
  ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
    map(response => fetchPostSucesss(response as Post[])),
    catchError(_ => of(fetchPostFailed())),
  ),
);

export const postsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(action => action.type === getPosts.type),
    mergeMap(() => fetchPosts),
  );
