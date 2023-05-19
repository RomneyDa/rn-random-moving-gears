export interface GearType {
  name: string
  source: any
  size: number
}

export interface GearProps {
  type: GearType
  x: number
  y: number
  angleOffset: number
  speed: number
  direction: -1 | 1
}
