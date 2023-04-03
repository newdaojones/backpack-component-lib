// actions.ts
import { SideType } from '../../components/Side/SideFactory';
import { DrawerType } from '../../components/Drawer/DrawerFactory';

import { 
    SET_SIDE_TYPE, 
    SET_DRAWER_TYPE,
    CHANGE_VIEW,
    RESET_VIEW 
} from './actionTypes';

export const setSideType = (sideType: SideType) => ({
  type: SET_SIDE_TYPE,
  payload: sideType,
});

export const setDrawerType = (drawerType: DrawerType) => ({
  type: SET_DRAWER_TYPE,
  payload: drawerType,
});

// use these for any change of views, not just for context buttons or plugins 
export const changeView = (view: string) => ({
  type: CHANGE_VIEW,
  payload: view, // <--- this is the view that is passed to the viewReducer
});

export const resetView = () => ({
  type: RESET_VIEW,
});
