import React from 'react';
import Navbar from './components/Navbar.js';
import Destination from './components/Destination.js';
import data from './data.js';

export default function App() {
    const destinations = data.map((item) => {
        return (
            <Destination
                item={item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            {destinations}
        </div>
    )
}