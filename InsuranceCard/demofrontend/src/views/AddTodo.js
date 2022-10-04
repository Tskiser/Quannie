const AddTodo = (props) => {
    const { todo, setTodo, handOnclick } = props;
    return (
        <div>
            <label>Name: </label>
            <input value={todo} type="text" onChange={(event) => setTodo(event.target.value)} />
            <button type="button" onClick={() => handOnclick()}>Submit</button>
            <br />
        </div>
    )
}
export default AddTodo