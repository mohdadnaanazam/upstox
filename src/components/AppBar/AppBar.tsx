import { Text, View } from "react-native"

import { styles } from "./Styles"

export const AppBar = (): JSX.Element => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.appBar__text}>Upstox Holding</Text>
    </View>
  )
}
