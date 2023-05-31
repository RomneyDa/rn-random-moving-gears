import { GearSet } from '../../types/Gear'
import SmallGearImage from './images/small-gear.png'

const set: GearSet = {
  name: 'basic-black',
  diametricalPitch: 10,
  additionalToothLength: 10,
  gears: [
    {
      name: 'small',
      imageSource: SmallGearImage,
      diameter: 100,
    },
  ],
}

export default set
