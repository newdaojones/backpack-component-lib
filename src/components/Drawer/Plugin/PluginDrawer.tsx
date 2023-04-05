// src/components/Drawer/Plugin/PluginDrawer.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { DrawerStyles } from '../../../style/styles';
import { pluginDrawerData } from '../../../data/drawerListData';

const PluginDrawer: React.FC = () => {
  const { listContainer } = DrawerStyles;

  return (
    <View style={listContainer}>
      {pluginDrawerData.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default PluginDrawer;
