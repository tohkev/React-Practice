// Not needed as we are using the react and react-dom CDN
// import React from 'react';
// import ReactDOM from 'react-dom';

function StaticWebpage() {
    return (
        <div>
            <nav>
                <img src="./img/react-logo.png" width="40px" alt="React Logo" />
            </nav>
            <main>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        </div>
    )
}

ReactDOM.render(<StaticWebpage />, document.getElementById('root'));