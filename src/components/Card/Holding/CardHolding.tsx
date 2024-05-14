import { View, Text } from "react-native"

import { styles } from "./Styles"

export const HoldingRow = (): JSX.Element => {
  return (
    <View style={styles.cardholding}>
      <View style={styles.spaceBetweenRow}>
        <Text style={styles.cardholding__name}>IRFC</Text>
        
        <View style={styles.spaceBetweenRow}>
          <Text>LTP:</Text><Text style={styles.cardholding__price}>$100.50</Text>
        </View>
      </View>

      <View style={styles.spaceBetweenRow}>
        <Text>575</Text>

        <View style={styles.spaceBetweenRow}>
          <Text>P/L:</Text><Text style={styles.cardholding__price}>$10034.50</Text>
        </View>
      </View>
    </View>
  )
}
