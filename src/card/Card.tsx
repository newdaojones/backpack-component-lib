// Card.tsx
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useCardAnimation } from "../utils/animations";
import { CardStyles } from "../style/styles";
import CardRoutes from './CardRoutes';
import ContextButtons from '../contextButton/ContextButtons'; // Import ContextButtons

import { AssetDrawer, BadgeDrawer, isDrawerType, PersonaDrawer, PluginDrawer } from "../drawer/DrawerModels";


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
          CardRoutes.map(route => {
            if (activeSide === route.key) {
              const Component = route.component;
              return (
                <Component
                  key={route.key}
                  onDrawerChange={handleDrawerChange}
                  data={route.data}
                />
              );
            }
            return null;
          })
        }
        </View>
      </TouchableOpacity>
      // Card.tsx
{
  CardRoutes.flatMap(route => route.drawers).map(drawer => {
    if (activeDrawer === drawer.key) {
      const DrawerComponent = drawer.component;

      if (isDrawerType<AssetDrawer>(drawer.data, "asset")) {
        return (
          <DrawerComponent
            key={drawer.key}
            data={drawer.data}
            onDrawerChange={handleDrawerChange}
          />
        );
      } else if (isDrawerType<BadgeDrawer>(drawer.data, "badge")) {
        return (
          <DrawerComponent
            key={drawer.key}
            data={drawer.data}
            onDrawerChange={handleDrawerChange}
          />
        );
      } else if (isDrawerType<PersonaDrawer>(drawer.data, "persona")) {
        return (
          <DrawerComponent
            key={drawer.key}
            data={drawer.data}
            onDrawerChange={handleDrawerChange}
          />
        );
      } else if (isDrawerType<PluginDrawer>(drawer.data, "plugin")) {
        return (
          <DrawerComponent
            key={drawer.key}
            data={drawer.data}
            onDrawerChange={handleDrawerChange}
          />
        );
      }
    }
    return null;
  })
}

      {/* Pass the context buttons from the active side */}
      <ContextButtons contextButtons={activeSideRoute?.contextButtons || []} />
    </View>
  );
};

export default Card;
