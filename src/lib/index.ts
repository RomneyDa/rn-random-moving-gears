import { Gear, GearSet, GeneratedGear, GearGenerator } from './types/Gear'

// Generators
import LinearDiagonalDown from './generators/linear-diagonal-down'
import LinearRight from './generators/linear-right'

const lib = {
  Generators: {
    LinearDiagonalDown,
    LinearRight,
  },
}
export default lib
