// src/components/Side/AssetSide.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { SideStyles } from '../../../style/styles';
import { assetContentData } from '../../../data/sideContentData';

const AssetSide: React.FC = () => {
  const { container, content } = SideStyles;
  const { title, description } = assetContentData;

  return (
    <View style={container}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 16 }}>{description}</Text>
      </View>
    </View>
  );
};

export default AssetSide;
