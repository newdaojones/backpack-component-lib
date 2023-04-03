// AssetSide.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../Card/Card';
import { SideStyles } from '../../../style/styles'
import { assetContentData } from '../../../data/sideContentData';

const AssetSide: React.FC = () => {
  const { container, content } = SideStyles;
  const { title, description } = assetContentData;

  return (
    <Card style={container}>
      <View>
        <Text style={SideStyles.title}>{title}</Text> 
        <Text style={SideStyles.content}>{description}</Text>
      </View>
    </Card>
  );
};

export default AssetSide;
