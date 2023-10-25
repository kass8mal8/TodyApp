import FAB from "./FAB";
import Header from "./Header";
import TodoCard from "./TodoCard";
import { useQuery, useQueryClient } from "@tanstack/react-query"
import useAuthContext from '../hooks/useAuthContext'
import { useState, useEffect, useMemo } from 'react';


const Home = () => {
    const { auth } = useAuthContext()
    const { user_id } = auth
    const url = `http://localhost:5000/api/todo/${user_id} `

    const fetchTodos = async() => {
        const res = await fetch(url)
        const todos = await res.json()

        return todos
    }

    const queryKey = useMemo(() => ["todos"])
    const {isPending, isError, error, data: todos} = useQuery({
        queryKey,
        queryFn: fetchTodos
    })

    // useEffect(() => {} , [data]);

    // todos && console.log(todos)
    
	const queryClient = useQueryClient()
	const refetchTodos = () => queryClient.invalidateQueries(['todos'])
    const completedTodos = () => queryClient.invalidateQueries(['todos'], { status: 'completed'})

    return (  
        <>
            <Header />
            {/* <SearchBar /> */}
            <TodoCard  
                isPending={isPending}
                todos={todos}
                isError={isError}
                error={error}
                refetchTodos={refetchTodos}
            />
            <FAB />
        </>
    );
}
 
export default Home;