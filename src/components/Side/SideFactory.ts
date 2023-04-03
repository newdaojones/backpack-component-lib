//SideFactory.ts
import React from 'react';
import PersonaSide from './Persona/PersonaSide';
import AssetSide from './Asset/AssetSide';
import BadgeSide from './Badge/BadgeSide';
import PluginSide from './Plugin/PluginSide';

export enum SideType {
  PERSONA = 'PERSONA',
  ASSET = 'ASSET',
  BADGE = 'BADGE',
  PLUGIN = 'PLUGIN',
}

export class SideFactory {
  public static createSide(type: SideType): React.FC {
    switch (type) {
      case SideType.PERSONA:
        return PersonaSide;
      case SideType.ASSET:
        return AssetSide;
      case SideType.BADGE:
        return BadgeSide;
      case SideType.PLUGIN:
        return PluginSide;
      default:
        throw new Error(`Unsupported side type: ${type}`);
    }
  }
}
