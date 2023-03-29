import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem/GoalItem.component';
import GoalInput from './components/GoalInput/GoalInput.component';

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHanlder = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='dark'/>
      <View style={styles.appContainer}>
        <Button 
          title="ADD NEW GOAL!" 
          color="#a065ec" 
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler} 
        />
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => {
              return(
                <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHanlder}/>
              );
            }}
            keyExtractor = {(item) => {
              return item.id;
            }}
            alwaysBounceHorizontal={false} 
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  goalsContainer:{
    flex:6,
  },
  
});
