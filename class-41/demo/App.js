import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Item from './components/Item.js';
import { useState } from 'react';

export default function App() {

  // const items = ['Hasan', 'Assel', 'Ayah', 'Bashar', 'Fahed', 'Farah']
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleChange = (enteredText) => {
    setNewItem(enteredText)
  }

  const onDelete = (deleteItem) => {
    const newArray = items.filter(item => item !== deleteItem);
    setItems(newArray)
  }

  const addItem = () => {
    setItems([...items, newItem])
  }

  const renderItem = ({item}) => (
    <Item item={item} onDelete={onDelete}/>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Class 41 - real device</Text>

        <StatusBar style="auto" />
      </View>
      <View>
        {/* {
          items.map(item => (
            
          ))
        } */}

        <TextInput placeholder='Ex. Enter your list item!' onChangeText={handleChange}/>
        <Button title='Add' onPress={addItem}/>

        <FlatList data={items} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
