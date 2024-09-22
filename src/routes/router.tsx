import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Home from "../components/Home.tsx";
import TodoList from "../components/TodoList.tsx";
import TodoItem from "../components/TodoItem.tsx";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"",
                element:<Home/>,
            },
            {
                path: "todoList",
                element: <TodoList/>
            },
            {
                path: 'todoList/:id',
                element: <TodoItem/>
            }
        ]
    }
])