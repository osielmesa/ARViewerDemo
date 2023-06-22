import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {ItemType} from '../@types';

type ARItemProps = {
  item: ItemType;
  onPress: () => void;
};

function ARItem(props: ARItemProps): JSX.Element {
  const {item, onPress} = props;
  const {name, description, imageUrl} = item;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
  },
});

export default ARItem;
