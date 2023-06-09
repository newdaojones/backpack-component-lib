// AssetSide.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { AssetSide as AssetSideModel, isSideType, CommonSideData } from './SideModels';
import { SideStyles } from '../style/styles';
import ContextButtons from '../contextButton/ContextButtons';
import { ContentSideModel } from '../card/CardRoutes';

type AssetSideProps = {
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

const AssetSide: React.FC<AssetSideProps> = ({ data, onDrawerChange }) => {
  if (!isSideType<AssetSideModel>(data, 'asset')) {
    return null;
  }

  const {
    title,
    assetCount,
    content,
    contentAlignment = "center",
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
      {data.sideType === 'asset' && <Text>Asset Count: {data.assetCount}</Text>}
    </View>
  );
};

export default AssetSide;
