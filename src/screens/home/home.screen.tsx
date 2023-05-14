import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { useAppDispatch } from 'store';
import { increment } from 'store/slices';
import { useAppSelector } from 'store/index';

const HomeScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(store => store.counter);

  useEffect(() => {
    dispatch(increment());
  }, [dispatch]);

  const incrementValue = () => {
    dispatch(increment());
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Text>{value}</Text>
      <Button title="Hola" onPress={() => incrementValue()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
