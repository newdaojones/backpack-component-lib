// PluginSide.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { PluginSide as PluginSideModel, isSideType, CommonSideData } from './SideModels';
import { SideStyles } from '../style/styles';
import ContextButtons from '../contextButton/ContextButtons';
import { ContentSideModel } from '../card/CardRoutes';

type PluginSideProps = {
  data: CommonSideData;
  onDrawerChange: (drawerId: string) => void;
}

const justifyContentMapping = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const textAlignMapping = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const PluginSide: React.FC<PluginSideProps> = ({ data, onDrawerChange }) => {
  if (!isSideType<PluginSideModel>(data, 'plugin')) {
    return null;
  }

  const {
    title,
    pluginCount,
    content,
    contentAlignment = 'center',
    padding = 24,
    titleAlignment = 'center',
  } = data;

  const mappedContentAlignment = justifyContentMapping[contentAlignment] as 'flex-start' | 'center' | 'flex-end';
  const mappedTitleAlignment = textAlignMapping[titleAlignment] as 'left' | 'center' | 'right';
  

  return (
    <View
      style={[
        SideStyles.container,
        { justifyContent: mappedContentAlignment, padding },
      ]}
    >
      <Text
        style={[
          SideStyles.title,
          { textAlign: mappedTitleAlignment },
        ]}
      >
        {title}
      </Text>
      <Text style={SideStyles.content}>{content}</Text>
      {data.sideType === 'plugin' && <Text>Plugin Count: {data.pluginCount}</Text>}
    </View>
  );
};

export default PluginSide;

