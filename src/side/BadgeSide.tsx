import React from 'react';
import { View, Text } from 'react-native';
import { BadgeSide as BadgeSideModel } from './SideModels';
import { SideStyles } from '../style/styles';
import ContextButtons from '../contextButton/ContextButtons';

type BadgeSideProps = {
  data: BadgeSideModel;
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
  const {
    title,
    badgeCount,
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
      <Text>Badge Count: {badgeCount}</Text>
    </View>
  );
};

export default BadgeSide;

