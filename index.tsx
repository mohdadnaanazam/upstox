/**
 * @format
 */

import { AppRegistry } from 'react-native'

import App2 from './App'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <App2 />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

AppRegistry.registerComponent(appName, () => App)
