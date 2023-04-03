import React from 'react';
import { View, Text } from 'react-native';
import { DrawerStyles } from '../../../style/styles';
import { personaDrawerData } from '../../../data/drawerListData';

const PersonaDrawer: React.FC = () => {
  const { listContainer } = DrawerStyles;

  return (
    <View style={listContainer}>
      {personaDrawerData.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default PersonaDrawer;
