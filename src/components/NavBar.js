import * as React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import '../styles/NavBar.scss';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="navbar-container">
                <h1>Grails of Dionysus</h1>
                <ul className="navbar">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/grails">Grails</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
}