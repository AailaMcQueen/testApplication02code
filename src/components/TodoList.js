import React from "react" 
import {connect} from "react-redux"


function TodoList(props){
    if(props.todos.length === 0) return null
    const ToDos = props.todos.map((todo, i) => {
        return (<tr key={i}>
                    <th scope="row">{todo.title}</th>
                    <td>{todo.description}</td>
                    <td>{todo.date}</td>
                    <td>{todo.status}</td>
                </tr>)
    })
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {ToDos}
            </tbody>
        </table>)
}

const mapStateToProps = state => ({
    todos: state.todos.toDoList
})

export default connect(mapStateToProps, null)(TodoList)