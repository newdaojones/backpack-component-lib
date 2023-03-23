import AssetSide from '../side/AssetSide';
import BadgeSide from '../side/BadgeSide';
import PersonaSide from '../side/PersonaSide';
import PluginSide from '../side/PluginSide';

import AssetDrawer from '../drawer/AssetDrawer';
import BadgeDrawer from '../drawer/BadgeDrawer';
import PersonaDrawer from '../drawer/PersonaDrawer';
import PluginDrawer from '../drawer/PluginDrawer';

import {
  AssetSide as AssetSideModel,
  BadgeSide as BadgeSideModel,
  PersonaSide as PersonaSideModel,
  PluginSide as PluginSideModel,
} from "../side/SideModels"; // Import the correct data models

import { ContextButtonProps } from '../contextButton/ContextButton';

export type SideComponent = typeof AssetSide | typeof BadgeSide | typeof PersonaSide | typeof PluginSide;
export type DrawerComponent = typeof AssetDrawer | typeof BadgeDrawer | typeof PersonaDrawer | typeof PluginDrawer;
export type ContentSideModel = AssetSideModel | BadgeSideModel | PersonaSideModel | PluginSideModel;

type DrawerRoute = {
  key: string;
  component: DrawerComponent;
}

type SideRoute = {
  key: string;
  component: SideComponent;
  drawers: DrawerRoute[];
  data: ContentSideModel;
  contextButtons: ContextButtonProps[];
}

const CardRoutes: SideRoute[] = [
  {
    key: 'asset',
    component: AssetSide,
    drawers: [
      {
        key: 'assetDrawer',
        component: AssetDrawer,
      },
    ],
    data: {
      id: '1',
      title: 'Asset Side',
      assetCount: 5,
      content: 'Asset content',
      contentAlignment: 'center',
    },
    contextButtons: [
      { label: 'A', onPress: () => console.log('A') },
      { label: 'B', onPress: () => console.log('B') },
      { label: 'C', onPress: () => console.log('C') },
      { label: 'Cancel', onPress: () => console.log('Cancel D') },
    ],
  },
  {
    key: 'badge',
    component: BadgeSide,
    drawers: [
      {
        key: 'badgeDrawer',
        component: BadgeDrawer,
      },
    ],
    data: {
      id: '2',
      title: 'Badge Side',
      badgeCount: 3,
    },
    contextButtons: [
      { label: 'E', onPress: () => console.log('E') },
      { label: 'F', onPress: () => console.log('F') },
      { label: 'G', onPress: () => console.log('G') },
      { label: 'Cancel', onPress: () => console.log('Cancel H') },
    ],
  },
  {
    key: 'persona',
    component: PersonaSide,
    drawers: [
      {
        key: 'personaDrawer',
        component: PersonaDrawer,
      },
    ],
    data: {
      id: '3',
      title: 'Persona Side',
      personaCount: 4,
    },
    contextButtons: [
      { label: 'I', onPress: () => console.log('I') },
      { label: 'J', onPress: () => console.log('J') },
      { label: 'K', onPress: () => console.log('K') },
      { label: 'L', onPress: () => console.log('L') },
    ],
  },
  {
    key: 'plugin',
    component: PluginSide,
    drawers: [
      {
        key: 'pluginDrawer',
        component: PluginDrawer,
      },
    ],
    data: {
      id: '4',
      title: 'Plugin Side',
      pluginCount: 6,
    },
    contextButtons: [
      { label: 'M', onPress: () => console.log('M') },
      { label: 'N', onPress: () => console.log('N') },
      { label: 'O', onPress: () => console.log('O') },
      { label: 'Cancel', onPress: () => console.log('Cancel P') },
    ],
  },
];

export default CardRoutes;
