import React from 'react';
import ktohPict from '../img/ktoh_pict.jpg'

export default function Info() {
    return (
        <div className="info-section">
            <img src={ktohPict} alt="Kevin Toh" className="info-pict" />
            <h1 className="info-heading">Kevin Toh</h1>
            <p className="info-title">Aspiring Software Developer</p>
            <address className="info-website">tohkev.github.io</address>
            <div className="info-contact">
                <a class="info-email" href="mailto:tohkev@gmail.com"><i class="fas fa-envelope info-icon"></i>Email</a>
                <a class="info-linkedin" href="https://linkedin.com"><i class="fab fa-linkedin info-icon"></i>LinkedIn</a>
            </div>
        </div>
    )
}