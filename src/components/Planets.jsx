import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//RAFCE DEFAULT
const Planets = (props) => {
    // WE NEED THIS FUNCTION (SETPLANET) TO STORE THE RESPONSE FROM THE API
    const [planets, setPlanets] = useState();
    // THIS ID IS PULLED FROM LINE 11 IN APP.JSX, IT WILL ONLY GRAB THE ID THAT THE USER INPUT!!!!
    const { id } = useParams();
    // USEEFFECT EXECUTES LOGIC ONCE UNLESS YOU INPUT A VAR INTO THE EMPTY []
    useEffect(() => {
        // USE AXIOS TO MAKE A CALL TO THE STAR WARS API
        axios.get(`https://swapi.dev/api/planets/${id}`)
            // STORES THE RESPONSE IMMEDIATELY OR RETURNS ERRORS
            // .then(response => console.log(response.data))
            .then(response => setPlanets(response.data))
            .catch(error => console.log(error));
    }, [id]) //RE-EXECUTES THE LOGIC WHEN THE ID VARIABLE CHANGES!
    // NOW THAT YOUR FUNCTIONS AND PARAMETERS ARE SET UP, ITS TIME TO RETURN THE INFORMATION 
    return (
        <div> {/* HOT WIRE: THE INITIAL STATE OF PEOPLE IS UNDEFINED
    AND THE HOTWIRE CHECKS THE VAR (PEOPLE) STATE AND
    BECOMES TRUTHY WHEN INFO IS FILLED, OTHERWISE IT WONT GET PAST THE && BECAUSE IT'S FALSEY */}
            {planets &&
                <div>
                    <h1>Planet: { planets.name }</h1>
                    <h4>Climate: { planets.climate }</h4>
                    <h4>Terrain: { planets.terrain }</h4>
                    <h4>Surface Water: { planets.surface_water }</h4>
                    <h4>Population: { planets.population }</h4>
                </div>
            }
        </div>
    )
}

export default Planets 