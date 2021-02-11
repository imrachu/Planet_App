import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function PlanetList({ planetList = [] }) {
    const [width, setWidth] = useState();

    return (
        <>
            { planetList.map((data, index) => {
                if (data) {
                    var w = data.orbital_period / 100;
                    return (
                        <div key={data.name} className="container">
                            <Card style={{ background: "yellow", opacity: w}}>
                                <Card.Title>{data.name}</Card.Title>
                            </Card>
                        </div>
                    )
                }
                else {
                    return null
                }

            })
            }
        </>
    );
}

export default PlanetList;