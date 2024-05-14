import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardholding: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    gap: 10,
    borderBottomWidth: 0.3,
    paddingVertical: 15,
    borderColor: 'gray'
  },
  cardholding__name: {
    fontWeight: 'bold',
    color: 'black'
  },
  cardholding__price: {
    fontWeight: 'bold',
    color: 'black'
  }
})
