// Card.tsx
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useCardAnimation } from "../utils/animations";
import { CardStyles } from "../style/styles";
import CardRoutes from './CardRoutes';
import ContextButtons from '../contextButton/ContextButtons'; // Import ContextButtons

const Card = () => {
  const [activeSide, setActiveSide] = useState(CardRoutes[0].key);
  const [activeDrawer, setActiveDrawer] = useState('');
  const animation = useCardAnimation();

  const handleCardSideChange = () => {
    const currentIndex = CardRoutes.findIndex(route => route.key === activeSide);
    const nextIndex = (currentIndex + 1) % CardRoutes.length;
    setActiveSide(CardRoutes[nextIndex].key);
    animation.start();
  };

  const handleDrawerChange = (drawerId: string) => {
    setActiveDrawer(drawerId);
  };

  const activeSideRoute = CardRoutes.find(route => route.key === activeSide);

  return (
    <View style={CardStyles.container}>
      <TouchableOpacity onPress={handleCardSideChange}>
        <View style={CardStyles.card}>
        {
          CardRoutes.map(route => (
            activeSide === route.key && (
              <route.component 
                key={route.key}
                onDrawerChange={handleDrawerChange}
                data={route.data}
              />
            )
          ))
        }
        </View>
      </TouchableOpacity>
      {
        CardRoutes.flatMap(route => route.drawers).map(drawer => (
          activeDrawer === drawer.key && <drawer.component key={drawer.key} />
        ))
      }
      {/* Pass the context buttons from the active side */}
      <ContextButtons contextButtons={activeSideRoute?.contextButtons || []} />
    </View>
  );
};

export default Card;
