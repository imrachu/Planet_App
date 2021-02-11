import React from 'react';
import { Card } from 'react-bootstrap';

function PlanetDetails(props) {
    console.log(props.planet);
    return (
        <div className="container">
            <Card bg="secondary" text="white" style={{ width: '50%' }} className="mb-2">
                <Card.Header>{props.planet[0].name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Rotation Period : {props.planet[0].rotation_period}</p>
                        <p>Orbital Period : {props.planet[0].orbital_period}</p>
                        <p>Diameter : {props.planet[0].diameter}</p>
                        <p>Climate : {props.planet[0].climate}</p>
                        <p>Gravity : {props.planet[0].gravity}</p>
                        <p>Terrain : {props.planet[0].terrain}</p>
                        <p>Surface Water : {props.planet[0].surface_water}</p>
                        <p>Population : {props.planet[0].population}</p>
                        <a href="/dashboard"><button> Go back</button></a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PlanetDetails;