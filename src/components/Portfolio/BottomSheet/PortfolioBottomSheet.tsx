/**
 * NOTE:
 * 1. Used React Native Reanimated library for achieving smooth animations
 */

import { Dimensions, Pressable } from "react-native"
import Animated, { withTiming } from 'react-native-reanimated'
import type { ReactNode } from 'react'

import { styles } from "./Styles"
import chevronUp from '../../../assets/icons/chevron-up.png'
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated"

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const MAX_TRANSLATE_Y = 10
const MIN_TRANSLATE_Y = -SCREEN_HEIGHT + 700

interface Props {
  children: ReactNode
  title: ReactNode
}

export const PortfolioBottomSheet = (props: Props): JSX.Element => {
  // init
  const { children, title } = props
  const translateY = useSharedValue(0)
  const isExpanded = useSharedValue(false)

  // animated styles
  const rBottomSheetStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    }
  })

  // animated styles
  const rNotchStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: isExpanded.value ? withTiming('-180deg', { duration: 500 }) : withTiming('0deg', { duration: 500 }) }]
    }
  })

  const rContentStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isExpanded.value ? 1 : 0, { duration: 500 })
    }
  })

  const rTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isExpanded.value ? 0 : 1, { duration: 500 })
    }
  })

  /**
   * @description Expand or collapse the bottom sheet
   * @returns void
   */
  const handleExpand = () => {
    translateY.value = withTiming(isExpanded.value ? MAX_TRANSLATE_Y : MIN_TRANSLATE_Y, { duration: 500 })
    isExpanded.value = !isExpanded.value
  }

  return (
    <Animated.View style={[styles.bottomsheet, rBottomSheetStyles]}>
      <Pressable hitSlop={40} onPress={handleExpand} style={styles.bottomsheet__notch}>
        <Animated.Image source={chevronUp} style={[rNotchStyles, styles.bottomsheet__notchIcon]} />
      </Pressable>

      <Animated.View style={rTitleStyle}>
        {title}
      </Animated.View>

      <Animated.View style={rContentStyle}>
        {children}
      </Animated.View>
    </Animated.View>
  )
}
