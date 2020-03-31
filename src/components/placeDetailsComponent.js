import React from "react";

export default class MovieDetailsComponent extends React.Component {


    componentDidMount() {
        const placeId = this.props.match.params.placeId
        fetch(`https://maps-proxy-server.herokuapp.com/api/places/${placeId}`)
            .then(response => response.json())
            .then(place => {
                this.setState({
                    place: place
                })
            })
    }


    state = {
        place: {},
    }

    render() {
        return(
            <div>
                <h2>
                    Place Details
                </h2>
                <h3>{this.state.place.name}</h3>
                <p>Address: {this.state.place.formatted_address}</p>
                <p>Phone Number: {this.state.place.formatted_phone_number}</p>
                <p>Rating: {this.state.place.rating}</p>

                <h4>Reviews</h4>
                {this.state.place.review}
                <ul>
                    {
                        this.state.place.reviews && this.state.place.reviews.map((review, index) =>
                            <li key={index}>{review.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}