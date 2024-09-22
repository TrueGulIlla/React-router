import {useLocation, useParams} from "react-router-dom";

const TodoItem = () => {
    const {id} = useParams<{id: string}>()
    const location = useLocation()
    const {name, age} = location.state as {name: string, age: number}
    return (
        <div>
            <h2>Item with id : {id} {name}</h2>
            <h3>{age}</h3>
        </div>
    );
};

export default TodoItem;