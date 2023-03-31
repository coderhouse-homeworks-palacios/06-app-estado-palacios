import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

import { deleteTodo, updateTodo } from '../store/actions/actions';

const MyTask = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.task}>
      <Checkbox
        status={task.done ? 'checked' : 'unchecked'}
        onPress={() => {
          dispatch(updateTodo(task.id));
        }}
      />
      <Text
        onPress={() => {
          dispatch(updateTodo(task.id));
        }}
        style={task.done ? styles.textDone : styles.text}
      >
        {task.title}
      </Text>
      <TouchableOpacity
        style={styles.trashIcon}
        onPress={() => {
          dispatch(deleteTodo(task.id));
        }}
      >
        <Entypo name='trash' size={24} color={'#d35400'} />
      </TouchableOpacity>
    </View>
  );
};

export default MyTask;

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  text: {
    fontSize: 18,
    alignItems: 'center',
    textAlignVertical: 'center',
    padding: 10,
    color: '#222222',
  },
  textDone: {
    fontSize: 18,
    alignItems: 'center',
    textAlignVertical: 'center',
    padding: 10,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    color: '#CCCCCC',
  },
  trashIcon: {
    marginLeft: 'auto',
    paddingRight: 10,
  },
});
