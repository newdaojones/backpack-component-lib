// src/components/ContextButtons/contextButtonSelector.test.ts
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { useCurrentContextButtonType } from './contextButtonSelector';
import configureMockStore from 'redux-mock-store';
import { ContextButtonType } from './ContextButtonsFactory';
import { SideType } from '../Side/SideFactory';
import { DrawerType } from '../Drawer/DrawerFactory';

// Create a mock for the useSelector function
const mockStore = configureMockStore<Partial<RootState>>();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

// Move the mockState function outside the test case
const mockState = (state: Partial<RootState>) => state as RootState;

describe('contextButtonSelector', () => {
  afterEach(() => {
    (useSelector as jest.Mock).mockClear();
  });

  it('should return the current context button type for PERSONA', () => {
    const initialState: RootState = {
      card: {
        currentContextButtonType: ContextButtonType.PERSONA,
        currentSideType: SideType.PERSONA,
        currentDrawerType: DrawerType.PERSONA,
      },
      view: {
        currentView: '',
      },
    };

    const store = mockStore(initialState);
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) => selector(mockState(store.getState())));
    expect(useCurrentContextButtonType()).toEqual(ContextButtonType.PERSONA);
  });

  it('should return the current context button type for ASSET', () => {
    const initialState: RootState = {
      card: {
        currentContextButtonType: ContextButtonType.ASSET,
        currentSideType: SideType.ASSET,
        currentDrawerType: DrawerType.ASSET,
      },
      view: { // <-- Add this property
        currentView: '',
      },
    };

    const store = mockStore(initialState);
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) => selector(mockState(store.getState())));
    expect(useCurrentContextButtonType()).toEqual(ContextButtonType.ASSET);
  });

  it('should return the current context button type for BADGE', () => {
    const initialState: RootState = {
      card: {
        currentContextButtonType: ContextButtonType.BADGE,
        currentSideType: SideType.BADGE,
        currentDrawerType: DrawerType.BADGE,
      },
      view: { // <-- Add this property
        currentView: '',
      },
    };

    const store = mockStore(initialState);
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) => selector(mockState(store.getState())));
    expect(useCurrentContextButtonType()).toEqual(ContextButtonType.BADGE);
  });

  it('should return the current context button type for PLUGIN', () => {
    const initialState: RootState = {
      card: {
        currentContextButtonType: ContextButtonType.PLUGIN,
        currentSideType: SideType.PLUGIN,
        currentDrawerType: DrawerType.PLUGIN,
      },
      view: { // <-- Add this property
        currentView: '',
      },
    };

    const store = mockStore(initialState);
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) => selector(mockState(store.getState())));
    expect(useCurrentContextButtonType()).toEqual(ContextButtonType.PLUGIN);
  });
});
