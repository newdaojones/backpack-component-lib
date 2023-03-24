// PersonaSide.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { PersonaSide as PersonaSideModel, isSideType, CommonSideData } from './SideModels';
import { SideStyles } from '../style/styles';
import ContextButtons from '../contextButton/ContextButtons';
import { ContentSideModel } from '../card/CardRoutes';

type PersonaSideProps = {
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

const PersonaSide: React.FC<PersonaSideProps> = ({ data, onDrawerChange }) => {
  if (!isSideType<PersonaSideModel>(data, 'persona')) {
    return null;
  }

  const {
    title,
    personaCount,
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
      {data.sideType === 'persona' && <Text>Persona Count: {data.personaCount}</Text>}
    </View>
  );
};

export default PersonaSide;

