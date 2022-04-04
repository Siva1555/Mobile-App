import React from 'react';
import { StyleSheet, SafeAreaView, } from 'react-native';
import Navigation from './Src/Navigation/index'



const App = () => {
  return(
    <SafeAreaView style={styles.root} >
      <Navigation />
    </SafeAreaView>
  )

  };


const styles = StyleSheet.create({ 
  root: {
    flex: 1,
    backgroundColor: '#e8e8e8',

  },

});

export default App;