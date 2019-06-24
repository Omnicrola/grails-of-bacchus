import * as React from "react";
import {GrailThumb} from "./GrailThumb";
import '../styles/GrailGallery.scss';

export const GrailGallery = ({grails}) => {
    return (
        <React.Fragment>
            <h1>Grails</h1>
            <div className="gallery">
                <button>&lt;</button>
                <div class="window">
                    {grails.map(grail => {
                        return (
                            <GrailThumb key={grail.id} data={grail}/>
                        );
                    })}
                </div>
                <button>&gt;</button>
            </div>
        </React.Fragment>
    );
};