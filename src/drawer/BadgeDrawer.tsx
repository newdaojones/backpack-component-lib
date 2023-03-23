import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BadgeDrawer as BadgeDrawerModel, ListItem } from './DrawerModels';
import { DrawerStyles } from '../style/styles';

type BadgeDrawerProps = {
  data: BadgeDrawerModel;
  onDrawerChange: (drawerId: string) => void;
}

const BadgeDrawer: React.FC<BadgeDrawerProps> = ({ data, onDrawerChange }) => {
  const {
    title,
    list,
  } = data;

  const renderItem = ({ item }: { item: ListItem }) => (
    <Text>{item.name}</Text>
  );
  

  return (
    <View style={DrawerStyles.listContainer}>
      <Text>{title}</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default BadgeDrawer;
