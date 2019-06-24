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
                <h1 className="header">Grails of Dionysus</h1>
                <div class="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/grails">Grails</Link>
                    <Link className="link" to="/about">About</Link>
                </div>
            </nav>
        )
    }
}