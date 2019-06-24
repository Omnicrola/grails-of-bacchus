import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Route, Link, HashRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {GrailsPage} from "./pages/GrailsPage";
import {NavBar} from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <NavBar/>
                <div className="page-container">
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/grails" component={GrailsPage}/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
