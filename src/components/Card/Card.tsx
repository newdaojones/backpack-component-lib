// src/components/Card/Card.tsx
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useCurrentSideType } from '../Side/sideSelector';
import { useCurrentDrawerType } from '../Drawer/drawerSelector';
import { useCurrentContextButtonType } from '../ContextButtons/contextButtonSelector';
import Side from '../Side/Side';
import Drawer from '../Drawer/Drawer';
import ContextButtons from '../ContextButtons/ContextButtons';

interface CardProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
}

const Card: React.FC<CardProps> = ({ children, style, testID }) => {
  const sideType = useCurrentSideType();
  const drawerType = useCurrentDrawerType();
  const contextButtonType = useCurrentContextButtonType();

  return (
    <View style={style} testID={testID || 'card'} >
      <Side sideType={sideType} />
      <Drawer drawerType={drawerType} />
      <ContextButtons contextButtonType={contextButtonType} />
      {children}
    </View>
  );
};

export default Card;
