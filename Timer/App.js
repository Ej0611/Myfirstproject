import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Timer: {timer}</Text>
      <Button title="Start" onPress={startTimer} />
      <Button title="Stop" onPress={stopTimer} />
      <Button title="Reset" onPress={resetTimer} />
    </View>
  );
}