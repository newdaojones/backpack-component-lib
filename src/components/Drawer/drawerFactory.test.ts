import React from 'react';
import { DrawerFactory, DrawerType } from './DrawerFactory';
import PersonaDrawer from './Persona/PersonaDrawer';
import AssetDrawer from './Asset/AssetDrawer';
import BadgeDrawer from './Badge/BadgeDrawer';
import PluginDrawer from './Plugin/PluginDrawer';

describe('DrawerFactory', () => {
  it('should create PersonaDrawer for PERSONA type', () => {
    expect(DrawerFactory.createDrawer(DrawerType.PERSONA)).toBe(PersonaDrawer);
  });

  it('should create AssetDrawer for ASSET type', () => {
    expect(DrawerFactory.createDrawer(DrawerType.ASSET)).toBe(AssetDrawer);
  });

  it('should create BadgeDrawer for BADGE type', () => {
    expect(DrawerFactory.createDrawer(DrawerType.BADGE)).toBe(BadgeDrawer);
  });

  it('should create PluginDrawer for PLUGIN type', () => {
    expect(DrawerFactory.createDrawer(DrawerType.PLUGIN)).toBe(PluginDrawer);
  });

  it('should throw an error for an unsupported type', () => {
    expect(() => DrawerFactory.createDrawer('UNSUPPORTED' as DrawerType)).toThrowError();
  });
});
