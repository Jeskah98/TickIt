import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [addedTasks, setAddedTasks] = useState([]);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false)
  }

  function addTaskHandler(enteredTaskText) {
    setAddedTasks((currentAddedTasks) => [
      ...currentAddedTasks, 
      { text: enteredTaskText, id: Math.random().toString()},
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setAddedTasks((currentAddedTasks) => {
      return currentAddedTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button 
          title='Add New Task' 
          color="#7b3ccc" 
          onPress={startAddTaskHandler} 
        />
        <TaskInput 
          visible={modalIsVisible} 
          onAddTask={addTaskHandler} 
          onCancel={endAddTaskHandler} 
        />
        <View style={styles.tasksContainer}>
          <FlatList 
            data={addedTasks} 
            renderItem={(itemData) => {
              return ( 
                <TaskItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDeleteItem={deleteTaskHandler}
                />
              );
            }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  }
});
