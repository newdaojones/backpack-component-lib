// Drawer.tsx
import React from 'react';
import { DrawerFactory, DrawerType } from './DrawerFactory';

interface DrawerProps {
  drawerType: DrawerType;
}

const Drawer: React.FC<DrawerProps> = ({ drawerType }) => {
  const DrawerComponent = DrawerFactory.createDrawer(drawerType);
  return <DrawerComponent />;
};

export default Drawer;

