import { StyleSheet, Text, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import useMouse from '@hooks/useMouse'
import { AnimatedGear } from '@components/AnimatedGear'
import { GearProps } from '@types/Gear'
import gearGenerator from '../components/gearGenerator'

const Home = () => {
  // On load, generate 100 gears
  const [gears, setGears] = useState<GearProps[]>()
  useEffect(() => {
    setGears(gearGenerator(100))
  }, [])

  // Animated value, updated with mouse position
  const pos = useSharedValue(0)
  const mouse = useMouse()
  useEffect(() => {
    pos.value = mouse.x
  }, [mouse])

  return (
    <View style={styles.container}>
      {gears && (
        <View>
          {gears.map((gear) => (
            <AnimatedGear pos={pos} gear={gear} />
          ))}
        </View>
      )}
      <Text>{`Mouse position: ${mouse.x}, ${mouse.y}`}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
