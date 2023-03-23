// DrawerModels.ts
// Common interface for all drawers
interface Drawer {
    id: string;
    title: string;
  }

  export interface ListItem {
    id: number;
    name: string;
  }
  
  // AssetDrawer data model
  export interface AssetDrawer extends Drawer {
    assetCount: number;
    list: ListItem[]; // Replace 'any' with the specific type of the list items when available
  }
  
  // BadgeDrawer data model
  export interface BadgeDrawer extends Drawer {
    badgeCount: number;
    list: ListItem[]; // Replace 'any' with the specific type of the list items when available
  }
  
  // PersonaDrawer data model
  export interface PersonaDrawer extends Drawer {
    personaCount: number;
    list: ListItem[]; // Replace 'any' with the specific type of the list items when available
  }
  
  // PluginDrawer data model
  export interface PluginDrawer extends Drawer {
    pluginCount: number;
    list: ListItem[]; // Replace 'any' with the specific type of the list items when available
  }
  