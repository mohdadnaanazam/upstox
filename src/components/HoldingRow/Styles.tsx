import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  holding: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    gap: 10,
    borderBottomWidth: 0.3,
    paddingVertical: 15,
    borderColor: 'gray'
  },
  holding__name: {
    fontWeight: 'bold'
  },
  holding__price: {
    fontWeight: 'bold'
  }
})