import React from "react"
import { Link } from "react-router-dom"

export default function TodoForm(props) {

    const onClick = () => {
        props.setFormState(false)
        props.resetTodo()
    }

    const onChange = (e) => {
        props.setTodo({...props.todo, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.setFormState(false)
        props.setSaveState(true)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-row ">
                <div className="form-group col-md-12">
                    <label htmlFor="title">Title:</label>
                    <input required type="text" className="form-control" name="title" placeholder="Title" onChange={onChange}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input required type="text" className="form-control" name="description" placeholder="Description" onChange={onChange}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="date">Due Date</label>
                    <input required type="date" className="form-control" name="date" onChange={onChange}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="status">Status</label>
                    <select name="status" className="form-control" onChange={onChange}>
                        <option value={"ToDo"}>ToDo</option>
                        <option>Ongoing</option>
                        <option>Stalled</option>
                        <option>Done</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Add Todo</button>
            <Link className="btn btn-link" to="#" onClick={onClick}>Cancel</Link>
        </form>
    )
}