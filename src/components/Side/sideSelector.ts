import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

export const useCurrentSideType = () => {
  return useSelector((state: RootState) => state.card.currentSideType);
};
