// ContextButtons.tsx
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
  contextButtonProps: ContextButtonPropsType;
}

const ContextButtons: React.FC<ContextButtonsProps> = ({ contextButtonType, contextButtonProps }) => {
  const ContextButtonsComponent = ContextButtonsFactory.createContextButtons(contextButtonType);
  return <ContextButtonsComponent {...contextButtonProps} />;
};

export default ContextButtons;
