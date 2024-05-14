/**
 * NOTE:
 * 1. Used BEM (Block Element Modifier) convention for naming css
 * 2. Imports are segerated by empty lines with first imports from 3rd party libraries followed by imports from internal modules
 * 3. Each component has a const export having an index.ts file in it if different variants came in we can export them from the same file
 *  3.1. This way we can keep the imports clean and easy to read
 *  3.2. This way we can also implement our storybook too easily
 * 4. All imports are sorted in ascending order
 */

import { View, StyleSheet, ScrollView } from 'react-native'

import { AppBar } from './src/components/AppBar'
import { Container } from './src/components/Container'
import { HoldingRow } from './src/components/Card/Holding'
import { PortfolioBottomSheet } from './src/components/Portfolio/BottomSheet'
import { PortfolioSummaryRow } from './src/components/Portfolio/SummaryRow'

function App(): JSX.Element {
  return (
    <>
      <Container backgroundColor='white' statusBarBackgroundColor='#43165C'>
        <AppBar />

        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 200 }}>
          <HoldingRow />
          <HoldingRow />
          <HoldingRow />
        </ScrollView>
      </Container>

      <PortfolioBottomSheet title={<PortfolioSummaryRow title='Profile & Loss' value='$4355.5' />}>
        <View style={styles.portfolioBottomSheetContainer}>
          <PortfolioSummaryRow title='Current Value:' value='$10000' />
          <PortfolioSummaryRow title='Total Investment:' value='$10000' />
          <PortfolioSummaryRow title='Total Profit & Loss:' value='$10000' />
          <PortfolioSummaryRow title='Profile & Loss:' value='$4355.5' extStyles={styles.portfolioBottomSheetContainer__profitLoss} />
        </View>
      </PortfolioBottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 10
  },
  portfolioBottomSheetContainer: {
    gap: 20
  },

  portfolioBottomSheetContainer__profitLoss: {
    marginTop: 20
  }
})

export default App
