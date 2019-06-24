import * as React from "react";
import {Link} from "react-router-dom";
import '../styles/SingleGrail.scss';
import {GrailSubmenu} from "./GrailSubmenu";


const GalleryImage = ({id, image}) => {
    return (
        <img src={`images/grail-${id}/${image}`} className="gallery-image" alt="thumbnail"/>
    );
};

export const SingleGrail = ({grails, match}) => {
    const id = match.params.id;
    const grail = grails.find(g => g.id == id);
    if (grail) {
        return (
            <div className="single-grail-container">
                <GrailSubmenu grails={grails}/>
                <div class="single-grail">
                    <h2 className="header">{grail.name}</h2>
                    {grail.images.map(image => {
                        return (<GalleryImage id={grail.id} image={image}/>)
                    })}
                    <p className="description">{grail.description}</p>
                </div>
            </div>
        );
    } else {
        return <div>Error</div>
    }
};