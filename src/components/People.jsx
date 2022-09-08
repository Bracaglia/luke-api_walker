import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const People = (props) => {
    const [people, setPeople] = useState();
    const { id } = useParams()

    useEffect(() => {
        // USE AXIOS TO MAKE A CALL TO THE STAR WARS API
        axios.get(`https://swapi.dev/api/people/${id}`)
            // RENDERS THE RESPONSE IMMEDIATELY OR RETURNS ERRORS
            .then(response => setPeople(response.data))
            .catch(error => console.log(error));
    }, [id])

    return (
        <div>
            {/* HOT WIRE: THE INITIAL STATE OF PEOPLE IS UNDEFINED
            AND THE HOTWIRE CHECKS THE VAR (PEOPLE) STATE AND
            BECOMES TRUTHY WHEN INFO IS FILLED, OTHERWISE IT WONT GET PAST THE && BECAUSE IT'S FALSEY */}
            { people &&
                <div>
                    <h1>{people.name}</h1>
                    <h4>height:  {people.height}</h4>
                    <h4>hair Color:  {people.hair_color}</h4>
                    <h4>Skin Color:  {people.skin_color}</h4>
                </div>
            }
        </div>
    )
}

export default People 
