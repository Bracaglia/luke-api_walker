import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Starships = (props) => {
    const [starships, setStarships] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response => setStarships(response.data))
            .catch(error => console.log(error));
    }, [id])
console.log(starships)
    return (
        <div>
            { starships &&
                <div>
                    <h1>{starships.name}</h1>
                    <h4>Model:  {starships.model}</h4>
                    <h4>Manufacturer:  {starships.manufacturer}</h4>
                    <h4>Crew:  {starships.crew}</h4>
                    <h4>Passengers:  {starships.passengers}</h4>
                    <h4>Starship Class:  {starships.starship_class}</h4>
                    <h4>Pilots:  {starships.pilots}</h4>
                </div>
            }
        </div>
    )
}

export default Starships 