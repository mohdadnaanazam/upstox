import { NavigationContainer } from '@react-navigation/native'
import { HoldingScreen } from './src/screens/Holding/HoldingScreen'

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <HoldingScreen />
    </NavigationContainer>
  )
}

export default App
