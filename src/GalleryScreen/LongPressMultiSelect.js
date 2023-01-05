import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const data = [
    {name: 'Rohan', contact: '1111111111', id: '1'},
    {name: 'Mohan', contact: '2222222222', id: '2'},
    {name: 'Sohan', contact: '3333333333', id: '3'},
    {name: 'Hohan', contact: '4444444444', id: '4'},
    {name: 'Dohan', contact: '5555555555', id: '5'},
    {name: 'Pohan', contact: '6666666666', id: '6'},
  ];

  const ListItem = ({item, selected, onPress, onLongPress}) => (
    <>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.listItem}>
        <View style={{padding: 8}}>
          <Text style={{fontSize: 22, color: '#fff'}}>{item.name}</Text>
          <Text style={{color: '#989BA1'}}>{item.contact}</Text>
        </View>
        {selected && <View style={styles.overlay} />}
      </TouchableOpacity>
    </>
  );
  

const LongPressMultiSelect = () => {

    const [selectedItems, setSelectedItems] = useState([]);

  const handleOnPress = contact => {
    if (selectedItems.length) {
      return selectItems(contact)
    }

    // here you can add you code what do you want if user just do single tap
    console.log('pressed');
  };

  const getSelected = contact => selectedItems.includes(contact.id);

  const deSelectItems = () => setSelectedItems([]);

  const selectItems = (item) => {
    if (selectedItems.includes(item.id)) {
        const newListItems = selectedItems.filter(listItem => listItem !== item.id);
        return setSelectedItems([...newListItems]);
      }
    setSelectedItems([...selectedItems, item.id]);
  }


  return (
    <Pressable onPress={deSelectItems} style={{flex: 1, padding: 15}}>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ListItem
          onPress={() => handleOnPress(item)}
          onLongPress={() => selectItems(item)}
          selected={getSelected(item)}
          item={item}
        />
      )}
      keyExtractor={item => item.id}
    />
  </Pressable>
);
};


export default LongPressMultiSelect

const styles = StyleSheet.create({
    container: {},
    listItem: {
      backgroundColor: '#252628',
      marginBottom: 10,
      borderRadius: 5,
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,0,0,0.5)',
    },
})