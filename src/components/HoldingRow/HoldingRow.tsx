import { View, Text } from "react-native"

import { styles } from "./Styles"

export const HoldingRow = (): JSX.Element => {
  return (
    <View style={styles.holding}>
      <View style={styles.spaceBetweenRow}>
        <Text style={styles.holding__name}>IRFC</Text>
        
        <View style={styles.spaceBetweenRow}>
          <Text>LTP:</Text><Text style={styles.holding__price}>$100.50</Text>
        </View>
      </View>

      <View style={styles.spaceBetweenRow}>
        <Text>575</Text>

        <View style={styles.spaceBetweenRow}>
          <Text>P/L:</Text><Text style={styles.holding__price}>$10034.50</Text>
        </View>
      </View>
    </View>
  )
}