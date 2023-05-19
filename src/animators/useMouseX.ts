import { useSharedValue } from 'react-native-reanimated'
import useMouse from '../lib/utils/useMouse'
import { useEffect } from 'react'

const mouseXAnimator = () => {
  const pos = useSharedValue(0)
  const { x } = useMouse()
  useEffect(() => {
    pos.value = x
  }, [x])
  return pos
}

export default mouseXAnimator
