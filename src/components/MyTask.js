import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';

const MyTask = ({ title, done }) => {
  return (
    <View style={styles.task}>
      <Checkbox status={done ? 'checked' : 'unchecked'} />
      <Text style={done ? styles.textDone : styles.text}>{title}</Text>
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
    padding: 20,
  },
  textDone: {
    fontSize: 18,
    alignItems: 'center',
    textAlignVertical: 'center',
    padding: 20,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
});
