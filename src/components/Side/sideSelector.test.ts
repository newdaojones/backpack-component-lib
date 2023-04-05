import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../store/rootReducer';
import { useCurrentSideType } from './sideSelector';
import { SideType } from '../Side/SideFactory';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('sideSelector', () => {
  test('useCurrentSideType should return the current side type', () => {
    const useSelectorMock = require('react-redux').useSelector;
    const store = configureStore({ reducer: rootReducer });

    useSelectorMock.mockImplementation((selector: (state: any) => any) => selector(store.getState()));

    expect(useCurrentSideType()).toBe(SideType.PERSONA);
  });
});
