import FAB from "./FAB";
import Header from "./Header";
import TodoCard from "./TodoCard";
import { useQuery, useQueryClient } from "@tanstack/react-query"
import useAuthContext from '../hooks/useAuthContext'
import { useState, useEffect } from 'react';


const Home = () => {
    const { auth } = useAuthContext()
    const user_id  = '6509a6ce77ae7f6a0ffef35e'
    const url = `http://localhost:5000/api/todo/6509a6ce77ae7f6a0ffef35e`
    const [todos, setTodos] = useState()

    const fetchTodos = async() => {
        const response = await fetch(url)
    
        if(!response.ok) {
            throw new Error("Network error")
        }
        return response.json()
    }

    const {isPending, isError, error, data} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos
    })

    useEffect(() => data && setTodos(data), []);
    console.log(data)
    
	const queryClient = useQueryClient()
	const refetchTodos = () => queryClient.invalidateQueries(['todos'])
    const completedTodos = () => queryClient.invalidateQueries(['todos'], { status: 'completed'})

    return (  
        <>
            <Header />
            {/* <SearchBar /> */}
            <TodoCard  
                isPending={isPending}
                todos={data}
                isError={isError}
                error={error}
                refetchTodos={refetchTodos}
            />
            <FAB />
        </>
    );
}
 
export default Home;