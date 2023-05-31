import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import React from 'react'
import { GeneratedGear } from '@dromney/gear-pattern-generator/dist/types/Gear'

interface AnimatedGearProps {
  generatedGear: GeneratedGear
  pos: SharedValue<number>
}

export const AnimatedGear = ({ generatedGear, pos }: AnimatedGearProps) => {
  const { gear, x, y, direction, angleOffset = 0, speed = 1 } = generatedGear
  if (
    gear == undefined ||
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
          width: gear.diameter,
          height: gear.diameter,
          position: 'absolute',
        },
        animatedStyle,
      ]}
      source={gear.imageSource}
      // source={{ uri: imageURI }}
    />
  )
}
