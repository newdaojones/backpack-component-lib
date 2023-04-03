// BadgeContextButtons.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/configureStore';
import { changeView, resetView } from '../../../store/actions/actions';
import ViewBadge from '../../../plugins/ViewBadge';
import ModifyBadge from '../../../plugins/ModifyBadge';
import CreateBadge from '../../../plugins/CreateBadge';
import { View, Text, TouchableOpacity } from 'react-native';
import { ContextButtonStyles } from '../../../style/styles';

export interface BadgeContextButtonsProps {
  viewBadgeLabel: string;
  modifyBadgeLabel: string;
  cancelLabel: string;
  createBadgeLabel: string;
}

const BadgeContextButtons: React.FC<BadgeContextButtonsProps> = ({
  viewBadgeLabel,
  modifyBadgeLabel,
  cancelLabel,
  createBadgeLabel,
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
      case 'viewBadge':
        return <ViewBadge />;
      case 'modifyBadge':
        return <ModifyBadge />;
      case 'createBadge':
        return <CreateBadge />;
      default:
        return null;
    }
  };

  return (
    <View>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('viewBadge')}>
          <Text style={ContextButtonStyles.contextButtonText}>{viewBadgeLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('modifyBadge')}>
          <Text style={ContextButtonStyles.contextButtonText}>{modifyBadgeLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => resetCurrentView()}>
          <Text style={ContextButtonStyles.contextButtonText}>{cancelLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ContextButtonStyles.contextButton} onPress={() => setCurrentView('createBadge')}>
          <Text style={ContextButtonStyles.contextButtonText}>{createBadgeLabel}</Text>
        </TouchableOpacity>
      {renderView()}
    </View>
  );
};

export default BadgeContextButtons;