import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

    const [people, setPeople] = useState ([]);
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
}

useEffect(() => {
    async function fetchPeople() {
        let res = await fetch('https://swapi.dev/api/people/?format=json');
        let data = res.json();
        setPeople(data.results);
    }

    async function fetchPlanets() {
        let res = await fetch('https://swapi.dev/api/planets/?format=json');
        let data = res.json();
        setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();

    return (
    <>
        <Router>
        
             <Navbar />
             

        </Router>
    
    </>
    );

}, [])


export default App;
