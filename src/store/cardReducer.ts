// src/store/cardReducer.ts
import { SET_SIDE_TYPE, SET_DRAWER_TYPE } from './actions/actionTypes';
import { SideType } from '../components/Side/SideFactory';
import { DrawerType } from '../components/Drawer/DrawerFactory';
import { ContextButtonType } from '../components/ContextButtons/ContextButtonsFactory';

const initialState = {
  currentSideType: SideType.PERSONA,
  currentDrawerType: DrawerType.PERSONA,
  currentContextButtonType: ContextButtonType.PERSONA,
};

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SIDE_TYPE:
      return {
        ...state,
        currentSideType: action.payload,
      };
    case SET_DRAWER_TYPE:
      return {
        ...state,
        currentDrawerType: action.payload,
        currentContextButtonType: action.payload as ContextButtonType,
      };
    default:
      return state;
  }
};

export default cardReducer;
