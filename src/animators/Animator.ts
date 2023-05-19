import { SharedValue } from 'react-native-reanimated'
import { GeneratedGear } from '../lib/types/Gear'

type GearAnimator = (generatedGears?: GeneratedGear[]) => SharedValue<number>

export default GearAnimator
