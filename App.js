import React from 'react';
import { View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Home /> */}
      <Search />
    </View>
  );
}

