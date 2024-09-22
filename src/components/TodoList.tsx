import {NavLink} from "react-router-dom";

const TodoList = () => {
    const todos = [
        {id: 1, name: "Задача 1", age: 2},
        {id: 2, name: "Задача 2", age: 3},
        {id: 3, name: "Задача 3", age: 4},
    ];
    return (
        <div>
            <h2>Список задач</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <NavLink state={{name: todo.name, age: todo.age}} to={`/todoList/${todo.id}`}>{todo.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;