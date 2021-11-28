import React from 'react';
import Beer from "./Beer"

const BeerList = ({beers, onBeerClick}) => {

    const beerItems = beers.map((beer, index) => {
        return <Beer onBeerClick={onBeerClick} beer={beer} key={index} />
    })


    return (
        <div>
        <ul>
            {beerItems}
        </ul>
        </div>
    )
}

export default BeerList;