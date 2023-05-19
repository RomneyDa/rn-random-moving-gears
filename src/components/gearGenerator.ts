import { GearProps } from '../types/Gear'
import { GEAR_TEETH_SIZE, GEAR_TYPES } from './gearData'

const gearGenerator = (numGears: number): GearProps[] => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8]
  const gears: GearProps[] = ids.map((id) => {
    return {
      type: GEAR_TYPES[0],
      x: id * 25,
      y: id * 25,
      direction: id % 2 === 0 ? 1 : -1,
      angleOffset: id % 2 === 0 ? 1 : 22.5,
      speed: 1,
    }
  })
  return gears
}

export default gearGenerator
