import React from 'react';
import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import ARItem from './src/components/ARItem';
import data from './src/data';
import {ItemType} from './src/@types';

function App(): JSX.Element {
  const onTouchAssetHandler = (item: ItemType) => {
    console.log(item);
  };

  const renderItem: ListRenderItem<ItemType> = ({item}) => {
    return <ARItem item={item} onPress={() => onTouchAssetHandler(item)} />;
  };

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

export default App;
