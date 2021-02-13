import React from "react"
import {NavLink} from "react-router-dom"

export default function Navbar (props) {

    const onClick = () => {
        props.setFormState(true)
        props.setSaveState(false)
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">testApplication</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink activeClassName="active" exact className="nav-link" to="/" onClick={onClick}>
                            Add New Todo!
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}