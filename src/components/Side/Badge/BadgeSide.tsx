import React from 'react';
import { View } from 'react-native';
import { SideStyles } from '../../../style/styles';
import { badgeContentData } from '../../../data/sideContentData';

const BadgeSide: React.FC = () => {
  const { container, content } = SideStyles;
  const { title, description } = badgeContentData;

  return (
    <View style={container}>
      <View>
        <h1>{title}</h1>
        <p>{description}</p>
      </View>
    </View>
  );
};

export default BadgeSide;
