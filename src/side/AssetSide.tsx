import React from 'react';
import { AssetSide as AssetSideModel } from './SideModels';

interface AssetSideProps {
  data: AssetSideModel;
}

const AssetSide: React.FC<AssetSideProps> = ({ data }) => {
  // Render the AssetSide component using the data prop
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Asset Count: {data.assetCount}</p>
    </div>
  );
};

export default AssetSide;
