// PersonaContextButtons.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { changeView, resetView } from '../../../store/actions/actions';
import Connect from '../../../plugins/Connect';
import OnRamp from '../../../plugins/OnRamp';
import BankCard from '../../../plugins/BankCard';
import Paycast from '../../../plugins/Paycast';
import { View, Text, TouchableOpacity } from 'react-native';
import { ContextButtonStyles } from '../../../style/styles';

export interface PersonaContextButtonsProps {
  connectLabel: string;
  onRampLabel: string;
  bankCardLabel: string;
  paycastLabel: string;
}

const PersonaContextButtons: React.FC<PersonaContextButtonsProps> = ({
  connectLabel,
  onRampLabel,
  bankCardLabel,
  paycastLabel,
}) => {
  const currentView = useSelector((state: RootState) => state.view.currentView);
  const dispatch = useDispatch();

  const setCurrentView = (view: string) => {
    dispatch(changeView(view));
  };

  const resetCurrentView = () => {
    dispatch(resetView());
  };

  const renderView = () => {
    switch (currentView) {
      case 'connect':
        return <Connect />;
      case 'onRamp':
        return <OnRamp />;
      case 'bankCard':
        return <BankCard />;
      case 'paycast':
        return <Paycast />;
      default:
        return null;
    }
  };

  return (
    <View>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('connect')}>
          <Text style={ContextButtonStyles.contextButtonText}>{connectLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('onRamp')}>
          <Text style={ContextButtonStyles.contextButtonText}>{onRampLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('bankCard')}>
          <Text style={ContextButtonStyles.contextButtonText}>{bankCardLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('paycast')}>
          <Text style={ContextButtonStyles.contextButtonText}>{paycastLabel}</Text>
        </TouchableOpacity>
      {renderView()}
    </View>
  );
};

export default PersonaContextButtons;
