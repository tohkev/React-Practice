import React from 'react';

export default function Destination(props) {
    return (
        <section className="destination--block container">
            <img src={props.item.imageUrl} alt={props.item.title} />
            <div className="destination--right">
                <div className="destination--info">
                    <p className="destination--location"><i class="fas fa-map-marker-alt marker"></i>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="destination--map">View on Google Maps</a>
                </div>
                <h2 className="destination--title">{props.item.title}</h2>
                <p className="destination--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="destination--description">{props.item.description}</p>
            </div>
        </section>
    )
}