import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Numbers from './Components/Numbers';
import Operators from './Components/Operators';

const App = () => {
  const [hasil, setHasil] = useState('');
  const [hitung, setHitung] = useState('');

  const calculation = () => {
    setHitung(eval(2 + 2));
  };

  const input = value => {
    if (value === '=') {
      return calculation();
    }
    setHasil(hasil + '' + value);
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={'#354259'} barStyle="light-content" />

      <View style={styles.hasil}>
        <Text style={styles.hasilText}>{hasil}</Text>
      </View>

      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Operators
            value={'('}
            onPress={() => {
              input('(');
            }}
          />
          <Operators
            value={')'}
            onPress={() => {
              input(')');
            }}
          />
          <Operators
            value={'/'}
            onPress={() => {
              input('/');
            }}
          />
          <Operators
            value={'x'}
            onPress={() => {
              input('x');
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={7}
            onPress={() => {
              input(7);
            }}
          />
          <Numbers
            value={8}
            onPress={() => {
              input(8);
            }}
          />
          <Numbers
            value={9}
            onPress={() => {
              input(9);
            }}
          />
          <Operators
            value={'+'}
            onPress={() => {
              input('+');
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={4}
            onPress={() => {
              input(4);
            }}
          />
          <Numbers
            value={5}
            onPress={() => {
              input(5);
            }}
          />
          <Numbers
            value={6}
            onPress={() => {
              input(6);
            }}
          />
          <Operators
            value={'-'}
            onPress={() => {
              input('-');
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={1}
            onPress={() => {
              input(1);
            }}
          />
          <Numbers
            value={2}
            onPress={() => {
              input(2);
            }}
          />
          <Numbers
            value={3}
            onPress={() => {
              input(3);
            }}
          />
          <Operators
            value={'='}
            onPress={() => {
              calculation;
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={0}
            onPress={() => {
              input(0);
            }}
          />
          <Numbers
            value={'.'}
            onPress={() => {
              input('.');
            }}
          />
          <Numbers
            value={'C'}
            onPress={() => {
              setHasil(hasil.slice(0, -1));
            }}
          />
          <Numbers
            value={'CA'}
            onPress={() => {
              setHasil('');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#354259',
    padding: 10,
    //justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  hasil: {
    flex: 0.4,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  hasilText: {
    fontSize: 60,
    color: '#ECE5C7',
    textAlign: 'right',
    paddingTop: 40,
    paddingRight: 20,
  },
});
