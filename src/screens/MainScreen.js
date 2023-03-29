import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyTask from '../components/MyTask';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainScreen = () => {
  // const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  // console.log(tasks);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>My tasks from Redux</Text>
      <SafeAreaView style={styles.safeArea}>
        <FlatList data={tasks} renderItem={({ item }) => <MyTask title={item.title} done={item.done} />} />
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 34,
  },
  title: {
    color: '#6750a4',
    fontSize: 28,
    borderBottomColor: '#6750a4',
    borderBottomWidth: 2,
    width: '100%',
    paddingBottom: 10,
  },
  safeArea: {
    width: '100%',
  },
});
