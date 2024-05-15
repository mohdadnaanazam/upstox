import { StyleSheet } from 'react-native'

import { colors } from '../../utils/colors'

export const styles = StyleSheet.create({
  appBar: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  appBar__text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'semibold'
  }
})
