import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
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

        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </div>
  );
}

export default App;
