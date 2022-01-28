import React from 'react';
import Info from './components/Info.js';
import About from './components/About.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';

export default function App(props) {
    const [lightMode, setLightMode] = React.useState(false);

    function toggleLightMode() {
        setLightMode(prevMode => !prevMode)
    }

    return (
        <div className={`container ${lightMode ? 'light' : ''}`}>
            <Info
                lightMode={lightMode}
                toggleLightMode={toggleLightMode}
            />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}