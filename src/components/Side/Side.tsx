// Side.tsx
import React from 'react';
import { SideFactory, SideType } from './SideFactory';

interface SideProps {
  sideType: SideType;
}

const Side: React.FC<SideProps> = ({ sideType }) => {
  const SideComponent = SideFactory.createSide(sideType);
  return <SideComponent />;
};

export default Side;
