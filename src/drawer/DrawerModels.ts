// DrawerModels.ts
export function isDrawerType<T extends Drawer>(drawer: Drawer, drawerType: string): drawer is T {
  return drawer.drawerType === drawerType;
}

// Common interface for all drawers
interface Drawer {
  drawerType: string;
  title: string;
}

export interface ListItem {
    id: number;
    name: string;
}

export interface CommonDrawerData extends Drawer {
  drawerType: string
  assetCount?: number;
  badgeCount?: number;
  personaCount?: number;
  pluginCount?: number;
  padding?: number;
  list: ListItem[];
}
  
// AssetDrawer data model
export interface AssetDrawer extends Drawer {
  drawerType: 'asset';
  assetCount: number;
  list: ListItem[];
}

// BadgeDrawer data model
export interface BadgeDrawer extends Drawer {
  drawerType: 'badge';
  badgeCount: number;
  list: ListItem[];
}

// PersonaDrawer data model
export interface PersonaDrawer extends Drawer {
  drawerType: 'persona';
  personaCount: number;
  list: ListItem[];
}

// PluginDrawer data model
export interface PluginDrawer extends Drawer {
  drawerType: 'plugin';
  pluginCount: number;
  list: ListItem[];
}