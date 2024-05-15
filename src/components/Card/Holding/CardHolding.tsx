import { View, Text } from "react-native"

import { IndianRupeeSymbol } from "../../../utils/constants"
import { IUserHolding } from "../../../types/user-holding/response-type"
import { styles } from "./Styles"

interface Props extends IUserHolding {
  isLast: boolean
}

export const CardHolding = (props: Props): JSX.Element => {
  const { symbol, quantity, ltp, close, isLast } = props

  return (
    <View style={[styles.cardHolding, isLast ? styles['cardHolding--last'] : {}]}>
      <View style={styles.spaceBetweenRow}>
        <Text style={styles.cardHolding__name}>{symbol}</Text>
        
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.cardHolding__ltp}>LTP:</Text><Text style={styles.cardHolding__price}> {IndianRupeeSymbol} {ltp.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.spaceBetweenRow}>
        <Text style={styles.cardHolding__quantity}>{quantity}</Text>

        <View style={styles.spaceBetweenRow}>
          <Text style={styles.cardHolding__pnl}>P/L:</Text><Text style={styles.cardHolding__price}> {IndianRupeeSymbol} {close.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  )
}
