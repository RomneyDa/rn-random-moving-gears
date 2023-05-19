export interface Gear {
  name: string
  imagePath: any
  diameter: number
}

export interface GearSet {
  name?: string
  diametricalPitch: number
  additionalToothLength: number
  gears: Gear[]
}

export interface GeneratedGear {
  type: Gear
  x: number
  y: number
  angleOffset: number
  speed: number
  direction: -1 | 1
}

export interface AreaDimensions {
  width: number
  height: number
}

export type GearGenerator = (
  gearSet: GearSet,
  areaDimensions?: AreaDimensions,
  numGears?: number,
  minGears?: number,
  maxGears?: number,
) => GeneratedGear[]
