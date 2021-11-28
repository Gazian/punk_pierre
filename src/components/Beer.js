import React from 'react';

const Beer = ({beer, onBeerClick}) => {
    const handleClick = function(){
        onBeerClick(beer);
    }
    
    

    
    return  <li onClick={handleClick}>{beer.name}</li> 
    
    
}

// function PairingList(beer) {
//     const food_pairings = beer.food_pairing;
//     const listPairings = food_pairings.map((pairing) =>
//     <li key={pairing.toString()}>
//         {pairing}
//     </li>
//     );
//         return(
//             <ul>
//                 {listPairings}
//             </ul>

//     );
// }

export default Beer;