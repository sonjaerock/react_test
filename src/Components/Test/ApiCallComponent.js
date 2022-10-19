import React from "react";
import { useGetTodoListQuery } from "../../store/api/TodoApi";

const ApiCallComponent = () => {
    const {data: todoList} = useGetTodoListQuery('');

    return (
        <div>
            todo list
            {todoList?.map((todo, idx) => {
                return (
                    <div key={idx}>
                        <span>title : { todo.title }</span> |
                        <span>completed : { todo.completed ? 'done' : 'none' }</span>
                    </div>
                )
            })}
        </div>
    )
}

export default ApiCallComponent