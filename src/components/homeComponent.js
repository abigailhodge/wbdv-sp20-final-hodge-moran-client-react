import React from "react";
import PlaceSearchComponent from "./placeSearchComponent";
import PlaceDetailsComponent from "./placeDetailsComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class HomeComponent extends React.Component {
    render() {
        return(
            <Router>
                <div className={`container`}>
                    <h1>Google Maps Client</h1>

                    <Route
                        path={`/`}
                        exact={true}
                        component={PlaceSearchComponent}/>

                    <Route
                        path={`/search/:searchTitle`}
                        exact={true}
                        component={PlaceSearchComponent}/>

                    <Route
                        path={`/places/:placeId`}
                        exact={true}
                        component={PlaceDetailsComponent}/>
                </div>
            </Router>
        )
    }
}