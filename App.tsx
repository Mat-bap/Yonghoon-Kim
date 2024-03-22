/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import SwipePage from './screen/swipePage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App() {

  return (
    <SafeAreaView>
      <SwipePage></SwipePage>
      {/* <SwipeSlider /> */}
    </SafeAreaView>
  );
}

export default App;
