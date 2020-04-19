/* eslint-disable prettier/prettier */
import React, {memo} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const AddTodoList = memo(props => {
  const {inputValue, changeInput, onIconPress} = props;

  return (
    <View style={styles.footer}>
      <TextInput
        style={styles.TextInput}
        placeholder="enter todo..."
        placeholderTextColor="#000"
        value={inputValue}
        onChange={changeInput}
        onChangeText={props.onInputKeyPress}
      />
      <TouchableOpacity style={styles.addButton} onPress={onIconPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
});
const styles = StyleSheet.create({
  TextInput: {
    alignSelf: 'stretch',
    padding: 20,
    // backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    fontSize: 16,
    color: '#000',
    textTransform: 'capitalize',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  addButton: {
    position: 'absolute',
    zIndex: 2,
    right: 20,
    bottom: 90,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    fontSize: 24,
    color: '#000',
  },
});
export default AddTodoList;
