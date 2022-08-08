import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [addedTasks, setAddedTasks] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    setAddedTasks((currentAddedTasks) => [
      ...currentAddedTasks, 
      enteredTaskText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Start Tasking!" 
        onChangeText={taskInputHandler} 
        />
        <Button title="Add Task" onPress={addTaskHandler} />
      </View>
      <View style={styles.tasksContainer}>
        <ScrollView>
          {addedTasks.map((task) => (
            <View key={task} style={styles.taskItem}>
              <Text style={styles.taskText}>
                {task}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#ccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  tasksContainer: {
    flex: 5,
  },
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  taskText: {
    color: 'white',
  }
  
});
