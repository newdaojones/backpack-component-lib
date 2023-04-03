import React from 'react';
import { View } from 'react-native';
import { SideStyles } from '../../../style/styles';
import { pluginContentData } from '../../../data/sideContentData';

const PluginSide: React.FC = () => {
  const { container, content } = SideStyles;
  const { title, description } = pluginContentData;

  return (
    <View style={container}>
      <View>
        <h1>{title}</h1>
        <p>{description}</p>
      </View>
    </View>
  );
};

export default PluginSide;
