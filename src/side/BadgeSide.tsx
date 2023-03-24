// BadgeSide.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { BadgeSide as BadgeSideModel, isSideType, CommonSideData } from './SideModels';
import { SideStyles } from '../style/styles';
import ContextButtons from '../contextButton/ContextButtons';
import { ContentSideModel } from '../card/CardRoutes';

type BadgeSideProps = {
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

const BadgeSide: React.FC<BadgeSideProps> = ({ data, onDrawerChange }) => {
  if (!isSideType<BadgeSideModel>(data, 'badge')) {
    return null;
  }

  const {
    title,
    badgeCount,
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
      {data.sideType === 'badge' && <Text>Badge Count: {data.badgeCount}</Text>}
    </View>
  );
};

export default BadgeSide;

