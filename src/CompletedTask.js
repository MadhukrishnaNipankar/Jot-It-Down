import React from 'react'
import { HStack, VStack, Text, IconButton, StackDivider, Spacer ,Badge} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { Heading } from "@chakra-ui/react";
const CompletedTask = ({ completed_todos,deleteCompletedTodo }) => {
    if (completed_todos.length) {
        return (
            <>
                <Heading
                    bgClip="text"
                    bgGradient="linear(to-r,red.500,pink.500,blue.500)"
                    style={{ marginTop: "50px" }}>
                    <h1>Complete{" ("+completed_todos.length+") "}</h1>
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
                    completed_todos.map((completedTask) => {
                        return (
                            <>
                                <HStack key={completedTask.id} >
                                    <Text>{completedTask.body}</Text>
                                    <Spacer />
                                    <IconButton icon={<FaTrash />} isRound="true" onClick={() => { deleteCompletedTodo(completedTask.id) }}></IconButton>
                                </HStack>
                            </>
                        )
                    })
                }
                </VStack>
            </>
        )
    }else{
        return (
            <>
            <Heading
                    bgClip="text"
                    bgGradient="linear(to-r,red.500,pink.500,blue.500)"
                    style={{ marginTop: "50px" }}>
                    Completed
            </Heading>
            <Badge colorScheme='blue' p="3" borderRadius="lg" style={{ marginTop: "50px" }}>No Completed To Do's to display</Badge>
            </>
        )
    }
}
export default CompletedTask