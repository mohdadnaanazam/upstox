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
export const PortfolioRow = (props: Props) => {
  const { title, value, extStyles } = props

  return (
    <View style={[styles.container, extStyles]}>
      <Text style={styles.container__title}>{title}</Text>

      <Text style={styles.container__value}>{value}</Text>
    </View>
  )
}