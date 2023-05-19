import { GearSet } from '../../types/Gear'

const specs: GearSet = {
  name: 'basic-black',
  diametricalPitch: 10,
  additionalToothLength: 10,
  gears: [
    {
      name: 'small',
      imagePath: './images/small-gear.png',
      diameter: 50,
    },
  ],
}

export default specs
