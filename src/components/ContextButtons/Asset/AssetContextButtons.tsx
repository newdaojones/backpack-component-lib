// AssetContextButtons.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { changeView, resetView } from '../../../store/actions/actions';
import SendReceive from '../../../plugins/SendReceive';
import TxHistory from '../../../plugins/TxHistory';
import AddAsset from '../../../plugins/AddAsset';
import { View, Text, TouchableOpacity } from 'react-native';
import { ContextButtonStyles } from '../../../style/styles';

export interface AssetContextButtonsProps {
  sendReceiveLabel: string;
  txHistoryLabel: string;
  cancelLabel: string;
  addAssetLabel: string;
}

const AssetContextButtons: React.FC<AssetContextButtonsProps> = ({
  sendReceiveLabel,
  txHistoryLabel,
  cancelLabel,
  addAssetLabel,
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
      case 'sendReceive':
        return <SendReceive />;
      case 'txHistory':
        return <TxHistory />;
      case 'addAsset':
        return <AddAsset />;
      default:
        return null;
    }
  };

  return (
    <View>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('sendReceive')}>
          <Text style={ContextButtonStyles.contextButtonText}>{sendReceiveLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('txHistory')}>
          <Text style={ContextButtonStyles.contextButtonText}>{txHistoryLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => resetCurrentView()}>
          <Text style={ContextButtonStyles.contextButtonText}>{cancelLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('addAsset')}>
          <Text style={ContextButtonStyles.contextButtonText}>{addAssetLabel}</Text>
        </TouchableOpacity>
      {renderView()}
    </View>
  );
};

export default AssetContextButtons;
