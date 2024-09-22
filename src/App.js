import React, { useEffect, useState } from 'react';

const App = () => {
    const [people, setPeople] = useState([]);

    const fetchPeople = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people/?format=json');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPeople(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <div>
            <h1>Personajes de Star Wars</h1>
            <ul>
                {people.map(person => (
                    <li key={person.name}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
