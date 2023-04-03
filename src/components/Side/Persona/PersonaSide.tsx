import React from 'react';
import { View } from 'react-native';
import { SideStyles } from '../../../style/styles';
import { personaContentData } from '../../../data/sideContentData';

const PersonaSide: React.FC = () => {
  const { container, content } = SideStyles;
  const { title, description } = personaContentData;

  return (
    <View style={container}>
      <View>
        <h1>{title}</h1>
        <p>{description}</p>
      </View>
    </View>
  );
};

export default PersonaSide;
