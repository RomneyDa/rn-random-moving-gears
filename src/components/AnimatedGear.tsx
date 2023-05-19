import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import React, { useMemo } from 'react'
import { Image } from 'react-native'
import { GeneratedGear } from '../lib/types/Gear'

interface AnimatedGearProps {
  generatedGear: GeneratedGear
  pos: SharedValue<number>
}

export const AnimatedGear = ({ generatedGear, pos }: AnimatedGearProps) => {
  const { type, x, y, direction, angleOffset = 0, speed = 1 } = generatedGear
  if (
    type == undefined ||
    x == undefined ||
    y == undefined ||
    direction == undefined
  )
    throw new Error(
      'AnimatedGear requires a gear type, position (x/y), and direction',
    )

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: pos.value * speed * direction + angleOffset + 'deg',
        },
      ],
    }
  })
  return (
    <Animated.Image
      style={[
        {
          left: x,
          top: y,
          width: type.diameter,
          height: type.diameter,
          position: 'absolute',
        },
        animatedStyle,
      ]}
      source={require('../lib/gear-sets/basic-black/images/small-gear.png')}
      // source={{ uri: imageURI }}
    />
  )
}
