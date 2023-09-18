import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const TodoInput = (props) => {
  const [todos, setTodos] = useState("");

  function addTodoEnter(enterText) {
    setTodos(enterText);
  }

  function onPress(){
    props.onTodoAdded(todos);
    setTodos("");

 
  }

    return (  
        <View style={styles.flexfortodo}>
        <TextInput
          placeholder="Add Your Shop"
          style={styles.textInput}
          onChangeText={addTodoEnter}
          value={todos}
        />
        <Button title="Add Shop" onPress={onPress} color={'#DA8812'}/>
      </View>
    );
}
 
export default TodoInput;

const styles = StyleSheet.create({

    flexfortodo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: "grey",
        paddingBottom: 20,
        marginBottom: 20,
      },
    
      textInput: {
        borderColor: "#DA8812",
        borderWidth: 2,
        padding: 10,
        width: "75%",
        marginRight: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        color: "#DA8812",
        paddingLeft: 20,
      },

})