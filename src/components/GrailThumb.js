import * as React from "react";

export const GrailThumb = ({data}) => {
    return (<div className="thumbnail-container">
        <h2>{data.name}</h2>
        <img src={`images/grail-${data.id}/thumbnail.jpg`} alt="thumbnail"/>
    </div>);
};