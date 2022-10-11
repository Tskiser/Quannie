import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "../views/AddTodo";
import DisplayTodo from "../views/DisplayTodo";
import Login from "./Login";
import Nav from "./Nav";
const Home = () => {
    const [todo, setTodo] = useState("")
    const [listTodo, setListTodo] = useState(
        [
            { id: "todo1", name: "watch youtube" },
            { id: "todo2", name: "use facebook" },
            { id: "todo3", name: "code visual" }
        ]
    )
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const handOnclick = () => {
        let todoId = randomIntFromInterval(4, 100)
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }
        setListTodo([...listTodo, todoItem])
        setTodo("")
    }
    const handleDelateTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        setListTodo(currentTodoList)
    }
    return (
        <div>
            <Nav />
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handOnclick={handOnclick}
            />

            <DisplayTodo
                childData={listTodo}
                handleDelateTodoInParent={handleDelateTodo} />


        </div>
    )
}
export default Home;
