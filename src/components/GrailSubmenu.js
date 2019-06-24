import * as React from "react";
import {Link} from "react-router-dom";
import '../styles/GrailSubmenu.scss';

export const GrailSubmenu = ({grails, match}) => {
    return (
        <div className="grail-subnav">
            {grails.map(grail => <Link className="subnav-item"
                                       to={`/grails/${grail.id}`}>{grail.name}</Link>)}
        </div>
    );
};