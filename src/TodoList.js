import React from 'react'
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList({todos,deleteTodo}) {
  if(!todos.length){
      return(
                <Badge colorScheme='blue' p="3"  borderRadius="lg">No todos to display </Badge>
      )
  }
    return (
        <VStack
        divider={<StackDivider/>}
        borderColor="gray.200"
        borderWidth="3px"
        p="4"
        borderRadius="xl"
        w="100%"
        maxW={{base:"90vw", sm:"80vw",lg:"50vw",xl:"40vw"}}
        alignItems="stretch"
        >
            {
                todos.map((todo) => {
                    return <HStack key={todo.id}  >
                        <Text>{todo.body}</Text>
                        <Spacer/>
                        <IconButton icon={<FaTrash />} isRound="true" onClick={()=>{deleteTodo(todo.id)}}></IconButton>
                    </HStack>
                })
            }
        </VStack>
    )
}

export default TodoList