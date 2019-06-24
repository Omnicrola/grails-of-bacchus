import * as React from "react";
import {getGrailData} from "../actions/GrailActions";
import {HashRouter} from "react-router-dom";
import {GrailGallery} from "../components/GrailGallery";
import {PropRoute} from "../components/PropRoute";
import {SingleGrail} from "../components/SingleGrail";

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
        const {match} = this.props;
        return (
            <React.Fragment>
                <HashRouter>
                    <PropRoute exact path={match.path} component={GrailGallery} grails={this.state.grails}/>
                    <PropRoute path={`${match.path}/:id`} component={SingleGrail} grails={this.state.grails}/>
                </HashRouter>
            </React.Fragment>
        );
    }
}