import * as React from "react";
import {Link} from "react-router-dom";
import '../styles/GrailThumb.scss';

export const GrailThumb = ({data}) => {
    return (<div className="thumbnail-container">
        <Link  className="link" to={'/grails/' + data.id}>
            <h2 className="grail-title">{data.name}</h2>
            <img src={`images/grail-${data.id}/thumbnail.jpg`} alt="thumbnail"/>
        </Link>
    </div>);
};