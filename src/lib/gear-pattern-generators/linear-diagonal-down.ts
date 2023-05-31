import { GearGenerator, GeneratedGear } from '../types/Gear'

const linearDiagonalDown: GearGenerator = (
  gearSet,
  areaDimensions,
  numGears,
): GeneratedGear[] => {
  const ids = Array.from(Array(numGears).keys())
  const generatedGears: GeneratedGear[] = ids.map((id) => {
    return {
      gear: gearSet.gears[0],
      x: id * 25,
      y: id * 25,
      direction: id % 2 === 0 ? 1 : -1,
      angleOffset: id % 2 === 0 ? 1 : 22.5,
      speed: 1,
    }
  })
  return generatedGears
}

export default linearDiagonalDown
