import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './Physics';
import { useEffect, useState } from 'react';

export default function App() {
  const [running, setRunning] = useState(false)

  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <View style={{flex: 1}}>
      <GameEngine
      running={false}
      systems={[Physics]}
      entities={entities()}
       style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

       }}
      >

      </GameEngine>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}