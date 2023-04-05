// src/components/ContextButtons/contextButtonSelector.ts
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

export const useCurrentContextButtonType = () => {
  return useSelector((state: RootState) => state.card.currentContextButtonType);
};
