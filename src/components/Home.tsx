import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div>
           Home
            <NavLink to={'todoList'}>todoList</NavLink>
        </div>
    );
};

export default Home;