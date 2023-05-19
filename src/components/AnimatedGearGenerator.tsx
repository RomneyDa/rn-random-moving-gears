import React from 'react'
import { View } from 'react-native'
import {
  AreaDimensions,
  GearGenerator,
  GearSet,
  GeneratedGear,
} from '../lib/types/Gear'
import { AnimatedGear } from './AnimatedGear'
import GearAnimator from '../animators/Animator'
import { useEffect, useState } from 'react'

interface AnimatedGearsProps {
  gearSet: GearSet
  generator: GearGenerator
  animator: GearAnimator
  areaDimensions?: AreaDimensions
  numGears?: number
  minGears?: number
  maxGears?: number
}

const AnimatedGears = (props: AnimatedGearsProps): JSX.Element => {
  const {
    gearSet,
    generator,
    animator,
    areaDimensions,
    numGears,
    minGears,
    maxGears,
  } = props
  if (!gearSet || !generator || !animator) {
    throw new Error('AnimatedGears requires a gearSet and a generator')
  }

  const [generatedGears, setGeneratedGears] = useState<GeneratedGear[]>(null)
  useEffect(() => {
    console.log('setting generated gears')
    setGeneratedGears(
      generator(gearSet, areaDimensions, numGears, minGears, maxGears),
    )
  }, [])

  const pos = animator(generatedGears)

  if (!generatedGears) return null
  return (
    <View>
      {generatedGears.map((generatedGear, index) => {
        console.log('mapping generated gears')
        return (
          <AnimatedGear
            pos={pos}
            generatedGear={generatedGear}
            key={index} // Math.random().toString(36).slice(2)}
          />
        )
      })}
    </View>
  )
}

export default AnimatedGears
