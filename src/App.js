import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import CompletedTask from "./CompletedTask";
import { useState, useEffect} from "react";
import { useColorMode } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Tooltip } from '@chakra-ui/react';
function App() {
const { colorMode, toggleColorMode } = useColorMode()

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [completed_todos, setCompletedTodos] = useState(
    () => JSON.parse(localStorage.getItem("completed_todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completed_todos", JSON.stringify(completed_todos));
  }, [todos,completed_todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  /*Add to Completed todo*/
  function addToCompletedToDo(completedToDo,id){
      setCompletedTodos([...completed_todos,completedToDo])
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
  }
  /*Delete The completed Todo*/
  function deleteCompletedTodo(id){
    const newTodos = completed_todos.filter((completed_todos) => {
      return completed_todos.id !== id;
    });
    setCompletedTodos(newTodos);
  }

  return (
    <div className="App" style={{textAlign:"center"}}>
      <VStack p={4}>
      <Tooltip label={colorMode==="light"?"Enable Dark Mode":"Enable Light Mode"} placement='left-end' bg="blue.500">
        <IconButton
          aria-label="Search database"
          icon={colorMode === "light"?<FaSun />:<FaMoon/>}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        </Tooltip>

        <Heading
          fontWeight="extrabold"
          size="2xl"
          p="3"
          w="fit-content"
          bgGradient="linear(to-r,red.500,pink.500,blue.500)"
          bgClip="text"
        >
          Jot Your Todos Down !
        </Heading>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} addToCompletedToDo={addToCompletedToDo}/>
        <CompletedTask completed_todos={completed_todos} deleteCompletedTodo={deleteCompletedTodo}/>
      </VStack>
    </div>
  );
}

export default App;
