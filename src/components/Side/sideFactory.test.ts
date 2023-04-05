import React from 'react';
import { SideFactory, SideType } from './SideFactory';
import PersonaSide from './Persona/PersonaSide';
import AssetSide from './Asset/AssetSide';
import BadgeSide from './Badge/BadgeSide';
import PluginSide from './Plugin/PluginSide';

describe('SideFactory', () => {
  it('should create PersonaSide for PERSONA type', () => {
    expect(SideFactory.createSide(SideType.PERSONA)).toBe(PersonaSide);
  });

  it('should create AssetSide for ASSET type', () => {
    expect(SideFactory.createSide(SideType.ASSET)).toBe(AssetSide);
  });

  it('should create BadgeSide for BADGE type', () => {
    expect(SideFactory.createSide(SideType.BADGE)).toBe(BadgeSide);
  });

  it('should create PluginSide for PLUGIN type', () => {
    expect(SideFactory.createSide(SideType.PLUGIN)).toBe(PluginSide);
  });

  it('should throw an error for an unsupported type', () => {
    expect(() => SideFactory.createSide('UNSUPPORTED' as SideType)).toThrowError();
  });
});
