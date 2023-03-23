import React from 'react';
import { PluginSide as PluginSideModel } from './SideModels';

interface PluginSideProps {
  data: PluginSideModel;
}

const PluginSide: React.FC<PluginSideProps> = ({ data }) => {
  // Render the Persona component using the data prop
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Plugin Count: {data.pluginCount}</p>
    </div>
  );
};

export default PluginSide;
