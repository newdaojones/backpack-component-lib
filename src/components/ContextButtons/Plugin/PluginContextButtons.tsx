// src/components/Drawer/Asset/AssetDrawer.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/configureStore';
import { changeView, resetView } from '../../../store/actions/actions';
import Details from '../../../plugins/Details';
import Signatures from '../../../plugins/Signatures';
import RunPlugin from '../../../plugins/RunPlugin';
import { View, Text, TouchableOpacity } from 'react-native';
import { ContextButtonStyles } from '../../../style/styles';

export interface PluginContextButtonsProps {
  detailsLabel: string;
  signaturesLabel: string;
  cancelLabel: string;
  runPluginLabel: string;
}

const PluginContextButtons: React.FC<PluginContextButtonsProps> = ({
  detailsLabel,
  signaturesLabel,
  cancelLabel,
  runPluginLabel,
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
      case 'details':
        return <Details />;
      case 'signatures':
        return <Signatures />;
      case 'runPlugin':
        return <RunPlugin />;
      default:
        return null;
    }
  };

  return (
    <View>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('details')}>
          <Text style={ContextButtonStyles.contextButtonText}>{detailsLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('signatures')}>
          <Text style={ContextButtonStyles.contextButtonText}>{signaturesLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => resetCurrentView()}>
          <Text style={ContextButtonStyles.contextButtonText}>{cancelLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('runPlugin')}>
          <Text style={ContextButtonStyles.contextButtonText}>{runPluginLabel}</Text>
        </TouchableOpacity>
        {renderView()}
    </View>
  );
};

export default PluginContextButtons;