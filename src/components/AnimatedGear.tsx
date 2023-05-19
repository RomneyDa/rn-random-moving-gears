import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import React from 'react'
import { GearProps } from '@types/Gear'

interface AnimatedGearProps {
  gear: GearProps
  pos: SharedValue<number>
}

export const AnimatedGear = ({ gear, pos }: AnimatedGearProps) => {
  const { type, x, y, direction, angleOffset, speed } = gear
  const animatedStyle = useAnimatedStyle(() => {
    // console.log(pos.value)
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
          width: type.size,
          height: type.size,
          position: 'absolute',
        },
        animatedStyle,
      ]}
      source={type.source}
    />
  )
}
