import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../store/rootReducer';
import { useCurrentDrawerType } from './drawerSelector';
import { DrawerType } from '../Drawer/DrawerFactory';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('drawerSelector', () => {
  test('useCurrentDrawerType should return the current drawer type', () => {
    const useSelectorMock = require('react-redux').useSelector;
    const store = configureStore({ reducer: rootReducer });

    useSelectorMock.mockImplementation((selector: (state: any) => any) => selector(store.getState()));

    expect(useCurrentDrawerType()).toBe(DrawerType.PERSONA);
  });
});
