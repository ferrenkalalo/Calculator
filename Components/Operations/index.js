import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Operatorions = ({value, onPressOperations}) => {
  return (
    <TouchableOpacity
      style={styles.operations}
      onPress={onPressOperations}
      activeOpacity={0.7}>
      <Text style={styles.operationsText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Operatorions;

const styles = StyleSheet.create({
  operations: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ECE5C7',
    margin: 3,
    borderRadius: 5,
  },
  operationsText: {
    color: '#354259',
    fontSize: 30,
  },
});
