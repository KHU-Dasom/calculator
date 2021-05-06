import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Calc from './Calc';
import History from './History';

export default function App() {
  const [histories, setHistories] = useState([]);
  return (
    <SafeAreaView style={styles.warp}>
      <View style={styles.App}>
        <View style={[styles.App, styles.container]}>
          <Calc setHistories={setHistories} />
          <History histories={histories} />
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  App: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 320,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 50,
  },
});
