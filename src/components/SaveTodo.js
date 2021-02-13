import React from "react"
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import {setTodoList} from "../store/actions/todoActions"

function SaveTodo(props) {

    const onCancel = () => {
        props.resetTodo()
        props.setSaveState(false)
    }

    const onSave = () => {
        onCancel()
        props.setTodoList(props.todo)
        console.log(props.todo)
    }

    return (
        <div className="jumbotron">
            <h5 className="display-5">{props.todo.title}</h5>
            <p className="lead">{props.todo.description}</p>
            <hr className="my-4"/>
            <p className="caption"><strong>Due Date: </strong>{props.todo.date}&nbsp;&nbsp;&nbsp;<strong>Status: </strong>{props.todo.status}</p>
            <Link className="btn btn-primary" to="#" onClick={onSave}>Save ToDo</Link>
            <Link className="btn btn-link" to="#" onClick={onCancel}>Cancel</Link>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {setTodoList})(SaveTodo)