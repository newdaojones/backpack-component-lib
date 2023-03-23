import AssetSide from '../side/AssetSide';
import BadgeSide from '../side/BadgeSide';
import PersonaSide from '../side/PersonaSide';
import PluginSide from '../side/PluginSide';

import AssetDrawer from '../drawer/AssetDrawer';
import BadgeDrawer from '../drawer/BadgeDrawer';
import PersonaDrawer from '../drawer/PersonaDrawer';
import PluginDrawer from '../drawer/PluginDrawer';

export type SideComponent = typeof AssetSide | typeof BadgeSide | typeof PersonaSide | typeof PluginSide;
export type DrawerComponent = typeof AssetDrawer | typeof BadgeDrawer | typeof PersonaDrawer | typeof PluginDrawer;

type DrawerRoute = {
  key: string;
  component: DrawerComponent;
}

type SideRoute = {
  key: string;
  component: SideComponent;
  drawers: DrawerRoute[];
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
  },
];

export default CardRoutes;
