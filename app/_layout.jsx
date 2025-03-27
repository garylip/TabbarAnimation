import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar/TabBar'

const _layout = () => {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="earn"
        options={{
          title: "Earn"
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards"
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More"
        }}
      />
    </Tabs>
  )
}

export default _layout