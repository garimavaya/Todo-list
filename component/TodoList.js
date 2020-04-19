/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {memo} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';

const TodoList = memo(props => {
  const {items, onItemCheck, onItemRemove} = props;

  return (
    <FlatList
      // inverted
      data={items.reverse()}
      contentContainerStyle={styles.note}
      renderItem={({item, index}) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: '#ededed',
            paddingBottom: 20,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => onItemCheck(index)}
              style={[
                styles.check,
                {
                  backgroundColor: item.checked ? 'green' : 'transparent',
                  borderColor: item.checked ? 'transparent' : '#000',
                },
              ]}>
              {item.checked && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{color: '#FFF'}}>c</Text>
                </View>
              )}
            </TouchableOpacity>
            <Text>{item.todoText}</Text>
          </View>
          <TouchableOpacity onPress={() => onItemRemove(index)}>
            <Text>del</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
});

export default TodoList;

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
  },
  check: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 20,
    borderWidth: 1,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#e91e63',
  },
  noteDelete: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
  },
  noteDeleteText: {
    color: '#fff',
  },
});
