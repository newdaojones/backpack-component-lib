//DrawerFactory.ts
import React from 'react';
import PersonaDrawer from './Persona/PersonaDrawer';
import AssetDrawer from './Asset/AssetDrawer';
import BadgeDrawer from './Badge/BadgeDrawer';
import PluginDrawer from './Plugin/PluginDrawer';

export enum DrawerType {
  PERSONA = 'PERSONA',
  ASSET = 'ASSET',
  BADGE = 'BADGE',
  PLUGIN = 'PLUGIN',
}

export class DrawerFactory {
  public static createDrawer(type: DrawerType): React.FC {
    switch (type) {
      case DrawerType.PERSONA:
        return PersonaDrawer;
      case DrawerType.ASSET:
        return AssetDrawer;
      case DrawerType.BADGE:
        return BadgeDrawer;
      case DrawerType.PLUGIN:
        return PluginDrawer;
      default:
        throw new Error(`Unsupported drawer type: ${type}`);
    }
  }
}
