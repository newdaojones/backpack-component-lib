// src/components/Side/Badge/BadgeSide.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { SideStyles } from '../../../style/styles';
import { badgeContentData } from '../../../data/sideContentData';

const BadgeSide: React.FC = () => {
  const { container, content } = SideStyles;
  const { title, description } = badgeContentData;

  return (
    <View style={container}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 16 }}>{description}</Text>
      </View>
    </View>
  );
};

export default BadgeSide;
