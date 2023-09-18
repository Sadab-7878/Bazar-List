import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  const [todoList, setTodoList] = useState([]);



  function addTodoText(todos) {
    if (todos == "") {
      return;
    }

    if(!todoList.some((item) => item.text === todos)){


    
    setTodoList([...todoList, {text:todos, id:Math.random().toString()}]);

    }
    
   
  }

  // export default function App() {
  //   const [todoList, setTodoList] = useState([]);
  //   const [uniqueTodoTexts, setUniqueTodoTexts] = useState(new Set());
  
  //   function addTodoText(todos) {
  //     if (todos === "" || uniqueTodoTexts.has(todos)) {
  //       return;
  //     }
  
  //     setTodoList([...todoList, { text: todos, id: Math.random().toString() }]);
  //     setUniqueTodoTexts(new Set(uniqueTodoTexts).add(todos));
  //   }
  
  //   // Rest of your code...
  // }
  

  function deleteHandler(id){

    // setTodoList(todoList.filter(todo => todo.id !== id));
   if(todoList.find(todo => todo.id == id)){
    setTodoList([]);

   }

  }

  return (
    <View style={styles.container}>

      <TodoInput onTodoAdded={addTodoText}/>
      
      <FlatList
      style={styles.flatlisttodo}
        data={todoList}
        renderItem={(todoItem) => {
          return (
            <TodoItem text={todoItem.item.text} onDelete={deleteHandler} id={todoItem.item.id}/>  
            
          );
        }} keyExtractor={(item, index) => {

          return (
            item.id
          );
        }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
    marginTop: 40,
  },


 

 

  flatlisttodo: {
    height: '85%',
  },
});
