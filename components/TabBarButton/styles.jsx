
import { StyleSheet } from 'react-native'

export const styles = (color) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0,
    bottom: 10
  },

  text: {
    color,
    fontSize: 11
  }
})