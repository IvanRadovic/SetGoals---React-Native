import React from "react";
import { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal, Image } from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

  return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../../assets/images/goal.png')} />
          <TextInput style={styles.textInput} 
            placeholder='Your course goal!' 
            onChangeText={goalInputHandler} 
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='ADD GOAL!' onPress={addGoalHandler} color="#b180f0" />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>
          </View>
        </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#311b6b',
        flex:1,
        justifyContent:"start",
        gap:30,
        alignItems:"center",
        padding:16,
      },
    textInput:{
      borderWidth:1,
      borderColor:'#e4d0ff',
      backgroundColor:"#e4d0ff",
      color:"#120438",
      width:'100%', 
      padding: 16,
      borderRadius: 10,
      alignItems:'center',
    },
    buttonContainer:{
      flexDirection:"row",
      marginTop:15,
      justifyContent:"space-between",
    },
    button:{
      width:'40%',
      marginHorizontal:8,
      borderRadius:10,
    },
    image:{
      width:200,
      height:200,
      margin:20
    }
})

