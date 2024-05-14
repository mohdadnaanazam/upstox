/**
 * @format
 */

import { AppRegistry } from 'react-native'

import App2 from './App'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <App2 />
    </NavigationContainer>
  )
}

AppRegistry.registerComponent(appName, () => App)
