import React from 'react';
import { PersonaSide as PersonaSideModel } from './SideModels';

interface PersonaSideProps {
  data: PersonaSideModel;
}

const PersonaSide: React.FC<PersonaSideProps> = ({ data }) => {
  // Render the Persona component using the data prop
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Persona Count: {data.personaCount}</p>
    </div>
  );
};

export default PersonaSide;
