import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import Numbers from './Components/Numbers';
import Operatorions from './Components/Operations';

const App = () => {
  const [result, setResult] = useState('');
  const [calculation, setCalculation] = useState('');

  const numberClick = text => {
    setResult(result + text);
  };

  const operationsClick = text => {
    setResult(result + text);
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={'#354259'} barStyle="light-content" />

      <View style={styles.hasil}>
        <View style={styles.kalkulasi}>
          <Text style={styles.kalkulasiText}>{calculation}</Text>
        </View>
        <View>
          <Text style={styles.hasilText}>{result}</Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Operatorions
            value={'('}
            onPressOperations={() => {
              operationsClick('(');
            }}
          />
          <Operatorions
            value={')'}
            onPressOperations={() => {
              operationsClick(')');
            }}
          />
          <Operatorions
            value={'/'}
            onPressOperations={() => {
              operationsClick('/');
            }}
          />
          <Operatorions
            value={'x'}
            onPressOperations={() => {
              operationsClick('*');
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={7}
            onPressNumber={() => {
              numberClick(7);
            }}
          />
          <Numbers
            value={8}
            onPressNumber={() => {
              numberClick(8);
            }}
          />
          <Numbers
            value={9}
            onPressNumber={() => {
              numberClick(9);
            }}
          />
          <Operatorions
            value={'+'}
            onPressOperations={() => {
              operationsClick('+');
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={4}
            onPressNumber={() => {
              numberClick(4);
            }}
          />
          <Numbers
            value={5}
            onPressNumber={() => {
              numberClick(5);
            }}
          />
          <Numbers
            value={6}
            onPressNumber={() => {
              numberClick(6);
            }}
          />
          <Operatorions
            value={'-'}
            onPressOperations={() => {
              operationsClick('-');
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={1}
            onPressNumber={() => {
              numberClick(1);
            }}
          />
          <Numbers
            value={2}
            onPressNumber={() => {
              numberClick(2);
            }}
          />
          <Numbers
            value={3}
            onPressNumber={() => {
              numberClick(3);
            }}
          />
          <Operatorions
            value={'='}
            onPressOperations={() => {
              setCalculation(eval(result));
            }}
          />
        </View>

        <View style={styles.container}>
          <Numbers
            value={0}
            onPressNumber={() => {
              numberClick(0);
            }}
          />
          <Numbers
            value={'.'}
            onPressNumber={() => {
              numberClick('.');
            }}
          />
          <Numbers
            value={'C'}
            onPressNumber={() => {
              setResult(result.slice(0, -1));
            }}
          />
          <Numbers
            value={'CA'}
            onPressNumber={() => {
              setResult('');
              setCalculation('');
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
  },
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  kalkulasi: {
    flex: 0.6,
    borderBottomWidth: 1.5,
    borderBottomColor: '#C2DED1',
  },
  kalkulasiText: {
    fontSize: 50,
    color: '#C2DED1',
    textAlign: 'right',
    marginHorizontal: 10,
  },
  hasil: {
    flex: 0.45,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  hasilText: {
    fontSize: 35,
    color: '#ECE5C7',
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 20,
  },
});
