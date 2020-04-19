/* eslint-disable prettier/prettier */
import React, {memo, useState} from 'react';
import Layout from './component/Layout';
import TodoList from './component/TodoList';
import AddTodoForm from './component/AddTodoForm';
import {StyleSheet, View} from 'react-native';
import {useInputValue, useTodos} from './hooks/todoList';

const App = memo(props => {
  const {inputValue, changeInput, clearInput} = useInputValue();
  const {todos, addTodo, checkTodo, removeTodo} = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <View style={styles.container}>
      <Layout>
        <TodoList
          items={todos}
          onItemCheck={idx => checkTodo(idx)}
          onItemRemove={idx => removeTodo(idx)}
        />
      </Layout>
      <AddTodoForm
        inputValue={inputValue}
        changeInput={changeInput}
        onIconPress={clearInputAndAddTodo}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
});
export default App;
