import { Fragment, useCallback } from 'react'
import { Platform, SafeAreaView, StatusBar, StatusBarStyle, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import type { ReactNode } from 'react'

import { styles } from './Styles'
import { colors } from '../../utils/colors'

export interface ContainerProps {
  children?: ReactNode
  backgroundColor?: string
  statusBarBackgroundColor?: string
  statusBarStyle?: StatusBarStyle
  fullScreen?: boolean
}

export function Container(props: ContainerProps) {
  // init
  const { children, backgroundColor = '#04151A', fullScreen, statusBarBackgroundColor, statusBarStyle = 'light-content' } = props
  const statusBarBackgroundColorIos = statusBarBackgroundColor
  const screenBackgroundColor = backgroundColor

  // effects
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(fullScreen ?? false);
        StatusBar.setBackgroundColor(statusBarBackgroundColor ?? colors.white)
      }

      StatusBar.setBarStyle(statusBarStyle)
    }, [fullScreen, statusBarBackgroundColor, statusBarStyle])
  )

  return (
    <View style={[styles.container, { backgroundColor: screenBackgroundColor }]}>
      {fullScreen ? (
        <Fragment>{children}</Fragment>
      ) : (
        <Fragment>
          <SafeAreaView style={[styles.container__safeAreaTop, { backgroundColor: statusBarBackgroundColorIos }]} />

          <SafeAreaView style={[styles.container__safeArea, { backgroundColor: screenBackgroundColor }]}>
            {children}
          </SafeAreaView>
        </Fragment>
      )}
    </View>
  )
}
