const DisplayTodo = (props) => {
    const deleteFromChild = (id) => {
        props.handleDelateTodoInParent(id);
    }
    const listTodo = props.childData
    return (
        <div>
            <div>List to do: </div>
            {listTodo.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => deleteFromChild(item.id)}>{item.name}</div>
                )
            })}
        </div>
    )
}
export default DisplayTodo