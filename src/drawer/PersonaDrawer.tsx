import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { PersonaDrawer as PersonaDrawerModel, ListItem, CommonDrawerData } from './DrawerModels';
import { DrawerStyles } from '../style/styles';

export type PersonaDrawerProps = {
  data: CommonDrawerData;
  onDrawerChange: (drawerId: string) => void;
}

const PersonaDrawer: React.FC<PersonaDrawerProps> = ({ data, onDrawerChange }) => {
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

export default PersonaDrawer;
