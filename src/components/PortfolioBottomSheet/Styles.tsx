import { Dimensions, StyleSheet } from 'react-native'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const BS_MIN_TRANSLATE_Y = SCREEN_HEIGHT / 1.15

export const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: BS_MIN_TRANSLATE_Y,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    backgroundColor: 'white',
    shadowRadius: 6.27,
    paddingHorizontal: 20
  },
  container__notch: {
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 100
  },
  container__notchIcon: {
    height: 30,
    width: 30
  }
})
