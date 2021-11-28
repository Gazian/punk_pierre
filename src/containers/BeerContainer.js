import React, {useState, useEffect} from 'react';
import BeerDetail from '../components/BeerDetail';
import BeerList from '../components/BeerList'


const BeerContainer = ({ beer }) => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
    getBeers();
    }, [])

    const onBeerClick = function (beer){
        setSelectedBeer(beer)
    }
    


    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }





    return (
        <div className="main-container">
            <h2>Beer List</h2>
           Beer: <BeerList onBeerClick = {onBeerClick} beers={beers}/>
           {selectedBeer ? <BeerDetail beer={selectedBeer}/> : null}
        </div>
    )

}

export default BeerContainer;



