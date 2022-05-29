import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';

function AddTodo({ addTodo }) {
    const toast = useToast()
    function handleTodoSubmit(e) {
        e.preventDefault();

        if (!content) {
            toast({
                title: 'No content entered',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            return;
        }

        let todo = {
            id: nanoid(),
            body: content
        };
        addTodo(todo);
        setContent("");
    }

    const [content, setContent] = useState("");
    return (
        <form onSubmit={handleTodoSubmit}>
            <HStack mt="8">
                <Input variant='filled' placeholder='eg. complete assignment 2' value={content} onChange={(e) => { setContent(e.target.value) }} />
                <Button colorScheme="pink" px="8" type="submit">Add Todo</Button>
            </HStack>
        </form>

    )
}

export default AddTodo;