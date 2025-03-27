import { StyleSheet } from 'react-native'

export const styles = (indicatorLeftValue, indicatorWidth) => StyleSheet.create({
  tabbar: {
    bottom: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    width: '100%'
  },

  indicator: {
    height: 4,
    top: -4,
    width: indicatorWidth,
    left: indicatorLeftValue,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#3bb93b',
    flex: 1,
    position: 'absolute'
  }
})