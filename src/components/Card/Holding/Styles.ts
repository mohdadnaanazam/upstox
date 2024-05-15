import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardHolding: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    gap: 10,
    borderBottomWidth: 0.3,
    paddingVertical: 15,
    borderColor: 'gray'
  },
  'cardHolding--last': {
    borderBottomWidth: 0
  },
  cardHolding__name: {
    fontWeight: 'bold',
    color: 'black'
  },
  cardHolding__price: {
    fontWeight: 'bold',
    color: 'black'
  }
})
