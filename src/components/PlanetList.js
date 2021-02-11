import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function PlanetList({ planetList = [] }) {
    planetList.sort(function(a, b) {
        return a.orbital_period.localeCompare(b.orbital_period)
    });

      console.log(planetList);

    return (
        <div>
            { planetList.map((data, index) => {
                if (data) {
                    var w = data.orbital_period / 10;
                    if (w < 10) {
                        w = 10
                    }
                    if(w > 100){
                        w = 70
                    }
                    return (
                        <div key={data.name} className="container">
                            <Link to = {`planets/${data.name}`}>
                                <Card style={{ background: "#B0E0E6", fontSize: "20px" }}>
                                    <Card.Title style={{fontSize: w + 20 + "px" }}>{data.name}</Card.Title>
                                </Card>
                            </Link>
                        </div>
                    )
                }
                else {
                    return null
                }

            })
            }
        </div>
    );
}

export default PlanetList;