import React from "react";
import {Link} from "react-router-dom";

export default class PlaceSearchComponent extends React.Component {

    componentDidMount() {
        let searchTitle = this.props.match.params.searchTitle;
        console.log(searchTitle)
        if(!searchTitle)
            searchTitle='coffee'
        fetch(`https://maps-proxy-server.herokuapp.com/api/places/search/${searchTitle}`)
        .then(response => response.json())
            .then(results => {
                console.log(results)
                this.setState({
                places: results,
                searchTitle: searchTitle
            })})
    }

    searchPlaces = (title) => {
        this.props.history.push(`/search/${title}`)
        fetch(`https://maps-proxy-server.herokuapp.com/api/places/search/${title}`)
            .then(response => response.json())
            .then(results => this.setState({
                places: results
            }))
    }

    state = {
        places: [],
        searchTitle: ''
    }

    render() {
        return(
            <div>
                <h2>Search Places</h2>
                <input
                    className={`form-control`}
                    onChange={e => this.setState({searchTitle: e.target.value})}
                    value={this.state.searchTitle}/>
                <button className={`btn btn-success btn-block`} onClick={() => this.searchPlaces(this.state.searchTitle)}>
                    Search Places
                </button>
                <ul className={`list-group`}>
                    {
                        this.state.places.map((place, i) =>
                            <li className={`list-group-item`} key={i}>
                                <Link to={`/places/${place.place_id}`}>
                                {place.name} 
                                </Link>
                                <p>{place.formatted_address}</p>
                                
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

}