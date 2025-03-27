import { Animated, View, StyleSheet, Dimensions, useAnimatedValue } from 'react-native'
import React from 'react'
import TabBarButton from '../TabBarButton/TabBarButton'
import { styles } from './styles';

const TabBar = ({ state, descriptors, navigation }) => {
  const focusedColor = "#3bb93b";
  const nomralColor = '#404740';

  const numberOfButtons = 4
  const indicatorWidth = 50
  const initialIndicatorLeftValue = Dimensions.get('window').width / numberOfButtons / 2 - (indicatorWidth / 2)
  const indicatorLeftValue = useAnimatedValue(initialIndicatorLeftValue)

  function getInidicatorLeftValue(selectedIndex) {
    return Dimensions.get('window').width / numberOfButtons / 2 - (indicatorWidth / 2) + 
    (Dimensions.get('window').width / numberOfButtons) * selectedIndex
  }

  return (
    <View style={styles().tabbar}>
      <Animated.View style={styles(indicatorLeftValue, indicatorWidth).indicator} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }

          Animated.timing(indicatorLeftValue, {
            toValue: getInidicatorLeftValue(index),
            duration: 200,
            useNativeDriver: false
          }).start()
        };

        return (
          <TabBarButton
            key={route.name}
            style={styles.tabbarItem}
            onPress={onPress}
            index={index}
            color={isFocused ? focusedColor : nomralColor}
            label={label}
          />
        )
      })}
    </View>
  )
}

export default TabBar