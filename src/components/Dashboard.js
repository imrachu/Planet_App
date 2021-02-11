import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlanetList from './PlanetList';

function Dashboard(props) {
    const [input, setInput] = useState('');
    const [planets, setPlanet] = useState();
    const [planetList, setPlanetList] = useState();

    const fetchData = async () => {
        await axios.get('https://swapi.dev/api/planets/')
            .then(res => {
                setPlanet(res.data.results)
                setPlanetList(res.data.results)
            })
            .catch(err => console.log(err));
    }

    const updateInput = async (input) => {
        const filtered = planetList.filter(planet => {
            return planet.name.toLowerCase().includes(input.toString().toLowerCase())
        })
        setInput(input);
        setPlanet(filtered);
    }

    const logout = (e) => {
        e.preventDefault();
        window.location = '/';
    }

    useEffect(() => { fetchData() }, []);

    return (
        <div>
            <div>
                <input
                    key="random1"
                    value={input}
                    placeholder={"Enter Name"}
                    onChange={(e) => updateInput(e.target.value)}
                />
                <button onClick={(e) => logout(e)}>Logout</button>
            </div>
            <h1>Planet List</h1>
            <PlanetList planetList={planets}  updateInput={updateInput} />
        </div>
    );
}

export default Dashboard;