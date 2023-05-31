import { SharedValue } from 'react-native-reanimated'
import { GeneratedGear } from '@dromney/gear-pattern-generator/dist/types/Gear'

type GearAnimator = (generatedGears?: GeneratedGear[]) => SharedValue<number>

export default GearAnimator
