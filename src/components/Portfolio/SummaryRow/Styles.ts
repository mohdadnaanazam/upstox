import { StyleSheet } from 'react-native'

import { colors } from '../../../utils/colors'

export const styles = StyleSheet.create({
  portfolioSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portfolioSummaryRow__title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black
  },
  portfolioSummaryRow__value: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black
  },
})
