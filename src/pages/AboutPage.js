import * as React from "react";

export class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <h1>About</h1>
                <p>The Grails of Dionysis are rare chalices of great power and debauchery. Their origins are shrouded in
                    mystery but historians believe they originated somewhere in a garage in Ypsilanti during a
                    inexplicable period of sobriety while in proximity to a lathe.</p>
                <p>Each hand-crafted Grail is a unique one-of-a-kind creation, a wonderous fusion of craftsmanship,
                    skill, obscene humor, and whatever is lying around the garage.</p>
            </React.Fragment>
        );
    }
}