import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} 
            placeholder='Your course goal!' 
            onChangeText={goalInputHandler} 
          />
          <Button title='Add Goal!' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
           data={courseGoals} 
           renderItem={(itemData) => {
            return(
              <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}  
           alwaysBounceHorizontal={false} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    marginRight:20
  },
  inputContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:25,
    borderBottomWidth:1,
    borderBottomColor:"blue"
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8, 
    padding: 10,
    borderRadius: 10,
    alignItems:'center'
  },

  goalsContainer:{
    flex:6,
  },

  goalItem: {
    margin:10,
    padding:10,
    borderRadius: 6,
    backgroundColor:"#5e0acc",
 },

 goalText: {
  color:"white",
 }
  
});
