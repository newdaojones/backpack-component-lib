// src/components/Drawer/Asset/AssetDrawer.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { DrawerStyles } from '../../../style/styles';
import { assetDrawerData } from '../../../data/drawerListData';

const AssetDrawer: React.FC = () => {
  const { listContainer } = DrawerStyles;

  return (
    <View style={listContainer}>
      {assetDrawerData.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default AssetDrawer;
