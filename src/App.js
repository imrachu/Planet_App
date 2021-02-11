import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import PlanetDetails from './components/PlanetDetails';

function App() {
  const [planetList, setPlanetList] = useState();
  const fetchData = async () => {
    await axios.get('https://swapi.dev/api/planets/')
      .then(res => {
        setPlanetList(res.data.results)
      })
      .catch(err => console.log(err));
  }
  useEffect(() => { fetchData() }, []);

  const PlanetWithName = ({ match }) => {
    return <PlanetDetails planet={planetList.filter((planet) => planet.name === match.params.planetname)} />
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/planets/:planetname" component={PlanetWithName} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;