import React from 'react';
import { Button, FlatList, SafeAreaView, Text } from 'react-native';
import { useAppDispatch } from 'store';
import { getPosts } from 'store/epics/posts.epic';
import { useAppSelector } from 'store/index';

const HomeScreen = (): JSX.Element => {
  const { posts } = useAppSelector(store => store.posts);

  return (
    <SafeAreaView>
      <FlatList
        ListEmptyComponent={NoPostLoaded}
        ListHeaderComponent={HeaderFlatlist}
        data={posts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </SafeAreaView>
  );
};

const HeaderFlatlist = () => {
  const dispatch = useAppDispatch();

  const getPostsFromApi = () => {
    dispatch(getPosts());
  };

  return (
    <Button
      title="Fetch Posts"
      onPress={() => {
        getPostsFromApi();
      }}
    />
  );
};

const NoPostLoaded = (): JSX.Element => {
  const { loadingFetchPost, errorFetchPost } = useAppSelector(
    store => store.posts,
  );

  if (loadingFetchPost) {
    return <Text>Loading posts...</Text>;
  }

  if (errorFetchPost) {
    return <Text>Failed trying to retrieve posts...</Text>;
  }

  return <Text>No post loaded!</Text>;
};

export default HomeScreen;
