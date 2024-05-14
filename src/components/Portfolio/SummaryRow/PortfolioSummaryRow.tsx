import { View, Text } from 'react-native'
import type { ViewStyle } from 'react-native'

import { styles } from "./Styles"

interface Props {
  title: string
  value: string
  extStyles?: ViewStyle
}

/**
 * @description PortfolioRow component
 * @param props 
 * @returns JSX.Element
 */
export const PortfolioSummaryRow = (props: Props) => {
  const { title, value, extStyles } = props

  return (
    <View style={[styles.portfolioSummaryRow, extStyles]}>
      <Text style={styles.portfolioSummaryRow__title}>{title}</Text>

      <Text style={styles.portfolioSummaryRow__value}>{value}</Text>
    </View>
  )
}