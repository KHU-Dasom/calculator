import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

function History({ histories }) {
  return (
    <View style={styles.history}>
      <Text style={styles.historyTitle}>History</Text>
      <ScrollView style={styles.historyTable}>
        {histories.map((history, key) => (
          <Text style={styles.text} key={`history-${key}`}>
            {history}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

export default History;

const styles = StyleSheet.create({
  history: {
    width: 400,
    height: 300,
    overflow: 'visible',
  },

  historyTitle: {
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#3c43a7',
    fontSize: 24,
    color: '#ffffff',
  },

  historyTable: {
    paddingLeft: 20,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },

  row: {
    height: 40,
    backgroundColor: '#F7F8FA',
  },

  text: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 24,
  },
});
