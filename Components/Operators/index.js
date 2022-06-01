import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Operators = ({value, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.operator}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.operatorText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Operators;

const styles = StyleSheet.create({
  operator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ECE5C7',
    margin: 3,
    borderRadius: 5,
  },
  operatorText: {
    color: '#354259',
    fontSize: 30,
  },
});
