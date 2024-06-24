// screens/ScientificCalculatorScreen.js

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { evaluate } from 'mathjs';

const CalculatorScreen = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evalResult = evaluate(input);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const renderButton = (label, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scientific Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        value={input}
        onChangeText={setInput}
        editable={false}
      />
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {renderButton('7', () => handlePress('7'))}
        {renderButton('8', () => handlePress('8'))}
        {renderButton('9', () => handlePress('9'))}
        {renderButton('/', () => handlePress('/'))}
      </View>
      <View style={styles.row}>
        {renderButton('4', () => handlePress('4'))}
        {renderButton('5', () => handlePress('5'))}
        {renderButton('6', () => handlePress('6'))}
        {renderButton('*', () => handlePress('*'))}
      </View>
      <View style={styles.row}>
        {renderButton('1', () => handlePress('1'))}
        {renderButton('2', () => handlePress('2'))}
        {renderButton('3', () => handlePress('3'))}
        {renderButton('-', () => handlePress('-'))}
      </View>
      <View style={styles.row}>
        {renderButton('0', () => handlePress('0'))}
        {renderButton('.', () => handlePress('.'))}
        {renderButton('=', handleCalculate)}
        {renderButton('+', () => handlePress('+'))}
      </View>
      <View style={styles.row}>
        {renderButton('sin', () => handlePress('sin('))}
        {renderButton('cos', () => handlePress('cos('))}
        {renderButton('tan', () => handlePress('tan('))}
        {renderButton('log', () => handlePress('log('))}
      </View>
      <View style={styles.row}>
        {renderButton('(', () => handlePress('('))}
        {renderButton(')', () => handlePress(')'))}
        {renderButton('^', () => handlePress('^'))}
        {renderButton('√', () => handlePress('sqrt('))}
      </View>
      <Button title="Clear" onPress={handleClear} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    fontSize: 20,
  },
  result: {
    height: 40,
    marginBottom: 16,
    textAlign: 'right',
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    margin: 4,
    padding: 16,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default CalculatorScreen;
