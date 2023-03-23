// Common interface for all sides
interface Side {
  id: string;
  title: string;
}

// AssetSide data model
export interface AssetSide extends Side {
  assetCount: number;
  content: string;
  contentAlignment: 'left' | 'right' | 'center';
  padding?: number;
  titleAlignment?: 'left' | 'right' | 'center';
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
