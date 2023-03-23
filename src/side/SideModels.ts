// Common interface for all sides
interface Side {
    id: string;
    title: string;
  }
  
  // AssetSide data model
  export interface AssetSide extends Side {
    assetCount: number;
  }
  
  // BadgeSide data model
  export interface BadgeSide extends Side {
    badgeCount: number;
  }
  
  // PersonaSide data model
  export interface PersonaSide extends Side {
    personaCount: number;
  }
  
  // PluginSide data model
  export interface PluginSide extends Side {
    pluginCount: number;
  }
  