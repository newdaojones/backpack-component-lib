// src/components/ContextButtons/ContextButtonsFactory.ts
import React from 'react';
import PersonaContextButtons from './Persona/PersonaContextButtons';
import AssetContextButtons from './Asset/AssetContextButtons';
import BadgeContextButtons from './Badge/BadgeContextButtons';
import PluginContextButtons from './Plugin/PluginContextButtons';

export enum ContextButtonType {
  PERSONA = 'PERSONA',
  ASSET = 'ASSET',
  BADGE = 'BADGE',
  PLUGIN = 'PLUGIN',
}

export class ContextButtonsFactory {
  public static createContextButtons(type: ContextButtonType): React.FC<any> {
    switch (type) {
      case ContextButtonType.PERSONA:
        return PersonaContextButtons;
      case ContextButtonType.ASSET:
        return AssetContextButtons;
      case ContextButtonType.BADGE:
        return BadgeContextButtons;
      case ContextButtonType.PLUGIN:
        return PluginContextButtons;
      default:
        throw new Error(`Unsupported context button type: ${type}`);
    }
  }
}
