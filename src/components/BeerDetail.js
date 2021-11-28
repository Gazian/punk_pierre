import React from "react";


const BeerDetail = ({beer, foodPairings}) => {
    return (
        <div id="beer-detail">
            <h4>{beer.name}</h4>
            <p><img id="beer-img" src={beer.image_url} /></p>
            <p>Description: {beer.description}</p>
            <p>Suggested Food Pairings: {beer.food_pairing}</p>
            <p>ABV: {beer.abv} %</p>
            </div>
    )
}

export default BeerDetail;