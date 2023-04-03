import React from 'react';
import { View, Text } from 'react-native';
import { DrawerStyles } from '../../../style/styles';
import { badgeDrawerData } from '../../../data/drawerListData';

const BadgeDrawer: React.FC = () => {
  const { listContainer } = DrawerStyles;

  return (
    <View style={listContainer}>
      {badgeDrawerData.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default BadgeDrawer;
