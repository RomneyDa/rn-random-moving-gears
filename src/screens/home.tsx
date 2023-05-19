import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AnimatedGears from '../components/AnimatedGearGenerator'

import mouseXAnimator from '../animators/useMouseX'
import BasicBlackGearSet from '../lib/gear-sets/basic-black'
import LinearDiagonalDown from '../lib/generators/linear-diagonal-down'

const Home = () => {
  return (
    <View style={styles.container}>
      <AnimatedGears
        animator={mouseXAnimator}
        gearSet={BasicBlackGearSet}
        generator={LinearDiagonalDown}
        numGears={10}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
