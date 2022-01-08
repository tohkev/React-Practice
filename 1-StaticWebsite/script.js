// Not needed as we are using the react and react-dom CDN
// import React from 'react';
// import ReactDOM from 'react-dom';

function Header() {
    return (
        <nav className="nav-bar">
            <img src="./img/react-logo.png" alt="React Logo" className="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function MainContent() {
    return (
        <main className="main-content">
            <h1 className="main-header">Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2021 Sample development. All rights reserved.</small>
        </footer>
    )
}

function StaticWebpage() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<StaticWebpage />, document.getElementById('root'));