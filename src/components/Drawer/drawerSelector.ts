// src/components/Drawer/drawerSelector.ts
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

export const useCurrentDrawerType = () => {
  return useSelector((state: RootState) => state.card.currentDrawerType);
};
