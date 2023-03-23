import React from 'react';
import { View, Text } from 'react-native';
import { AssetSide as AssetSideModel } from './SideModels';
import { AssetSideStyles } from '../style/styles';
import ContextButtons from '../contextButton/ContextButtons';

type AssetSideProps = {
  data: AssetSideModel;
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

const AssetSide: React.FC<AssetSideProps> = ({ data, onDrawerChange }) => {
  const {
    title,
    assetCount,
    content,
    contentAlignment,
    padding = 24,
    titleAlignment = 'center',
  } = data;

  const mappedContentAlignment = justifyContentMapping[contentAlignment] as 'flex-start' | 'center' | 'flex-end';
  const mappedTitleAlignment = textAlignMapping[titleAlignment] as 'left' | 'center' | 'right';
  

  return (
    <View
      style={[
        AssetSideStyles.container,
        { justifyContent: mappedContentAlignment, padding },
      ]}
    >
      <Text
        style={[
          AssetSideStyles.title,
          { textAlign: mappedTitleAlignment },
        ]}
      >
        {title}
      </Text>
      <Text style={AssetSideStyles.content}>{content}</Text>
      <Text>Asset Count: {assetCount}</Text>
    </View>
  );
};

export default AssetSide;
