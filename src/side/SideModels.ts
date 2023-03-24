// SideModels.ts
export function isSideType<T extends Side>(side: Side, sideType: T["sideType"]): side is T {
  return side.sideType === sideType;
}

// Common interface for all sides
export interface Side {
  sideType: string;
  title: string;
}

export interface CommonSideData extends Side {
  assetCount?: number;
  badgeCount?: number;
  personaCount?: number;
  pluginCount?: number;
  content?: string;
  contentAlignment?: 'left' | 'right' | 'center';
  padding?: number;
  titleAlignment?: 'left' | 'right' | 'center';
}

// AssetSide data model
export interface AssetSide extends Side {
  assetCount: number;
  content?: string;
  contentAlignment?: 'left' | 'right' | 'center';
  padding?: number;
  titleAlignment?: 'left' | 'right' | 'center';
}

// BadgeSide data model
export interface BadgeSide extends Side {
  badgeCount: number;
  content?: string;
  contentAlignment?: 'left' | 'right' | 'center';
  padding?: number;
  titleAlignment?: 'left' | 'right' | 'center';
}

// PersonaSide data model
export interface PersonaSide extends Side {
  personaCount: number;
  content?: string;
  contentAlignment?: 'left' | 'right' | 'center';
  padding?: number;
  titleAlignment?: 'left' | 'right' | 'center';
}

// PluginSide data model
export interface PluginSide extends Side {
  pluginCount: number;
  content?: string;
  contentAlignment?: 'left' | 'right' | 'center';
  padding?: number;
  titleAlignment?: 'left' | 'right' | 'center';
}