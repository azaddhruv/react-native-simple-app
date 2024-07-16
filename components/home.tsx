import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setData } from '../store/index';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import tw from 'twrnc'; // Import twrnc
//
import CardItem from './CardItem';

const Home = () => {
  const isLoading = useSelector((state: RootState) => state.index.isLoading);
  const data = useSelector((state: RootState) => state.index.data);

  const dispatch = useDispatch();
  const fetchRelatedData = async () => {
    try {
      const data = await axios.get('https://fakestoreapi.com/products');
      dispatch(setData(data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchRelatedData();
  }, []);

  return (
    <ScrollView style={tw`px-4 pt-3`}>
      {/* <CardItem /> */}
      <FlatList
        data={data}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // Render each item as needed
          <CardItem />
        )}
      />
    </ScrollView>
  );
};

export default Home;
