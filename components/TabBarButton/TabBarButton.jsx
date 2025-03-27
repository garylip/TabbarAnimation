import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { styles } from './styles'

const TabBarButton = (props) => {
  const { label, index, color } = props;

  const icons = [
    (props) => <AntDesign name="home" size={22} {...props} />,
    (props) => <FontAwesome6 name="file-invoice-dollar" size={22} {...props} />,
    (props) => <Feather name="gift" size={22} {...props} />,
    (props) => <Feather name="menu" size={22} {...props} />,
  ]

  return (
    <Pressable {...props} style={styles().container}>
      {
        icons[index]({
          color: color
        })
      }

      <Text style={styles(color).text}>
        {label}
      </Text>
    </Pressable>
  )
}

export default TabBarButton