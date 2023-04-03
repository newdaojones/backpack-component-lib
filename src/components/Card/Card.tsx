// Card.tsx
import React, { useState, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import Side from '../Side/Side';
import Drawer from '../Drawer/Drawer';
import ContextButtons from '../ContextButtons/ContextButtons';
import { SideType } from '../Side/SideFactory';
import { DrawerType } from '../Drawer/DrawerFactory';
import { ContextButtonType } from '../ContextButtons/ContextButtonsFactory';


interface CardProps { // <-- Add CardProps interface
  children: ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  const [currentSideType, setCurrentSideType] = useState<SideType>(SideType.PERSONA);
  const [currentDrawerType, setCurrentDrawerType] = useState<DrawerType>(DrawerType.PERSONA);
  const [currentContextButtonType, setCurrentContextButtonType] = useState<ContextButtonType>(ContextButtonType.PERSONA);

  return (
    <View>
      <Side sideType={currentSideType} />
      <Drawer drawerType={currentDrawerType} />
      <ContextButtons contextButtonType={currentContextButtonType} />
    </View>
  );
};

export default Card;
