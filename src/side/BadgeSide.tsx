import React from 'react';
import { BadgeSide as BadgeSideModel } from './SideModels';

interface BadgeSideProps {
  data: BadgeSideModel;
}

const BadgeSide: React.FC<BadgeSideProps> = ({ data }) => {
  // Render the AssetSide component using the data prop
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Badge Count: {data.badgeCount}</p>
    </div>
  );
};

export default BadgeSide;
