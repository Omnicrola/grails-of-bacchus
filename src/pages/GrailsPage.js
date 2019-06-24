import * as React from "react";
import {getGrailData} from "../actions/GrailActions";
import {GrailThumb} from "../components/GrailThumb";

export class GrailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grails: []
        };
    }

    componentDidMount() {
        getGrailData()
            .then(data => {
                this.setState({grails: data});
            });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Grails</h1>
                {this.state.grails.map(grail=>{
                    return (
                        <GrailThumb data={grail}/>
                    );
                })}
            </React.Fragment>
        );
    }
}