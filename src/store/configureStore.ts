// src/store/configureStore.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import the rootReducer
import { SideType } from '../components/Side/SideFactory';
import { DrawerType } from '../components/Drawer/DrawerFactory';
import { ContextButtonType } from '../components/ContextButtons/ContextButtonsFactory';

export interface CardState {
  currentSideType: SideType;
  currentDrawerType: DrawerType;
  currentContextButtonType: ContextButtonType;
}

export interface RootState {
  card: CardState;
  view: {
    currentView: string;
  };
}

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
