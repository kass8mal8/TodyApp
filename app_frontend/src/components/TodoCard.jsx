import TodoList from "./TodoList";

const TodoCard = ({todos, isPending, isError, error}) => {
    // console.log(todos)
    return (  
        <div>
            <TodoList 
                isPending={isPending}
                todos={todos}
                isError={isError}
                error={error}
                // refetchTodos={refetchTodos}
            />
        </div>
    );
}
 
export default TodoCard;