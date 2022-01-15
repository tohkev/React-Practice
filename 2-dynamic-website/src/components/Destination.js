import React from 'react';

export default function Destination() {
    return (
        <section className="destination--block container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Zj1NgJv6OPgSgIiwvdiNnor8FPrbsYkPEw&usqp=CAU" alt="Japan" />
            <div className="destination--right">
                <div className="destination--info">
                    <p className="destination--location"><i class="fas fa-map-marker-alt marker"></i>JAPAN</p>
                    <a href="#" className="destination--map">View on Google Maps</a>
                </div>
                <h2 className="destination--title">Mount Fuji</h2>
                <p className="destination--date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="destination--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    )
}