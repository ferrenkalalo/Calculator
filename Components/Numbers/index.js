import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Numbers = ({value, onPressNumber}) => {
  return (
    <TouchableOpacity
      style={styles.number}
      onPress={onPressNumber}
      activeOpacity={0.4}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Numbers;

const styles = StyleSheet.create({
  number: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#ECE5C7',
    fontSize: 30,
  },
});
