// Card.tsx
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';
import Side from '../Side/Side';
import Drawer from '../Drawer/Drawer';
import ContextButtons from '../ContextButtons/ContextButtons';
import { RootState } from '../../store/configureStore'; // Import the RootState from the rootReducer


interface CardProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  const sideType = useSelector((state: RootState) => state.card.currentSideType);
  const drawerType = useSelector((state: RootState) => state.card.currentDrawerType);
  const contextButtonType = useSelector((state: RootState) => state.card.currentContextButtonType);

  return (
    <View style={style}>
      <Side sideType={sideType} />
      <Drawer drawerType={drawerType} />
      <ContextButtons contextButtonType={contextButtonType} />
      {children}
    </View>
  );
};

export default Card;
