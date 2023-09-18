import { StyleSheet, Text, Pressable } from "react-native";

const TodoItem = (props) => {

  function deleteHandler(){
    props.onDelete(props.id);
  }
  return(

    <Pressable onPress={deleteHandler}>
      <Text style={styles.todo}>{props.text}</Text>

    </Pressable>
  );
  

    
  

};

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderColor: "#DA8812",
    backgroundColor: "#DA8812",
    marginVertical: 5,
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: "white",
    borderRadius: 10,
  },
});
