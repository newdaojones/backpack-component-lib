// src/components/ContextButtons/ContextButtons.tsx
import React from 'react';
import { ContextButtonsFactory, ContextButtonType } from './ContextButtonsFactory';
import { AssetContextButtonsProps } from './Asset/AssetContextButtons';
import { BadgeContextButtonsProps } from './Badge/BadgeContextButtons';
import { PersonaContextButtonsProps } from './Persona/PersonaContextButtons';
import { PluginContextButtonsProps } from './Plugin/PluginContextButtons';

type ContextButtonPropsType =
  | AssetContextButtonsProps
  | BadgeContextButtonsProps
  | PersonaContextButtonsProps
  | PluginContextButtonsProps;

interface ContextButtonsProps {
  contextButtonType: ContextButtonType;
}

const ContextButtons: React.FC<ContextButtonsProps> = ({ contextButtonType }) => {
  const ContextButtonsComponent = ContextButtonsFactory.createContextButtons(contextButtonType);
  return <ContextButtonsComponent />;
};

export default ContextButtons;
