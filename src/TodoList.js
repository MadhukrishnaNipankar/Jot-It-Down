import React from 'react'
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash} from 'react-icons/fa';
import { CheckIcon } from '@chakra-ui/icons'
import { Heading } from "@chakra-ui/react";
function TodoList({ todos, deleteTodo,addToCompletedToDo }) {
    if (!todos.length) {
        return (
            <>
            <Heading 
            bgClip="text"
            bgGradient="linear(to-r,red.500,pink.500,blue.500)"
            style={{ marginTop: "50px" }}>
                Incomplete
            </Heading>
            <Badge colorScheme='blue' p="3" borderRadius="lg" style={{ marginTop: "50px" }}>No Remaining todos to display </Badge>
            </>
        )
    }
    return (
        <>
            <Heading 
            bgClip="text"
            bgGradient="linear(to-r,red.500,pink.500,blue.500)"
            style={{ marginTop: "50px" }}>
                <h1>Incomplete{" ("+todos.length+") "}</h1>
            </Heading>
            <VStack
                divider={<StackDivider />}
                borderColor="gray.200"
                borderWidth="3px"
                p="4"
                borderRadius="xl"
                w="100%"
                maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
                alignItems="stretch"
                style={{ marginTop: "50px" }}
            >
                {
                    todos.map((todo) => {
                        return (
                            <>
                                <HStack key={todo.id} >
                                    <Text>{todo.body}</Text>
                                    <Spacer />
                                    <IconButton aria-label='Search database' icon={<CheckIcon />} onClick={()=>{addToCompletedToDo(todo,todo.id)}}/>
                                    <IconButton icon={<FaTrash />} isRound="true" onClick={() => { deleteTodo(todo.id) }}></IconButton>
                                </HStack>
                            </>
                        )
                    })
                }
            </VStack>
        </>
    )
}

export default TodoList