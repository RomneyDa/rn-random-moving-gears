import { GearGenerator, GeneratedGear } from '../types/Gear'

const linearRight: GearGenerator = (
  gearSet,
  areaDimensions,
  numGears,
): GeneratedGear[] => {
  const ids = Array.from(Array(numGears).keys())
  const generatedGears: GeneratedGear[] = ids.map((id) => {
    return {
      type: gearSet.gears[0],
      x: id * 25,
      y: 0,
      direction: id % 2 === 0 ? 1 : -1,
      angleOffset: id % 2 === 0 ? 1 : 22.5,
      speed: 1,
    }
  })
  return generatedGears
}

export default linearRight
