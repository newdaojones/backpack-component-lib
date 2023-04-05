import React from 'react';
import { ContextButtonsFactory, ContextButtonType } from './ContextButtonsFactory';
import PersonaContextButtons from './Persona/PersonaContextButtons';
import AssetContextButtons from './Asset/AssetContextButtons';
import BadgeContextButtons from './Badge/BadgeContextButtons';
import PluginContextButtons from './Plugin/PluginContextButtons';

describe('ContextButtonsFactory', () => {
  it('should create PersonaContextButtons for PERSONA type', () => {
    expect(ContextButtonsFactory.createContextButtons(ContextButtonType.PERSONA)).toBe(PersonaContextButtons);
  });

  it('should create AssetContextButtons for ASSET type', () => {
    expect(ContextButtonsFactory.createContextButtons(ContextButtonType.ASSET)).toBe(AssetContextButtons);
  });

  it('should create BadgeContextButtons for BADGE type', () => {
    expect(ContextButtonsFactory.createContextButtons(ContextButtonType.BADGE)).toBe(BadgeContextButtons);
  });

  it('should create PluginContextButtons for PLUGIN type', () => {
    expect(ContextButtonsFactory.createContextButtons(ContextButtonType.PLUGIN)).toBe(PluginContextButtons);
  });

  it('should throw an error for an unsupported type', () => {
    expect(() => ContextButtonsFactory.createContextButtons('UNSUPPORTED' as ContextButtonType)).toThrowError();
  });
});
