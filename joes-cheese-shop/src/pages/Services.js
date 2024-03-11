import React from 'react';
import servicesData from "../servicesData";
import './Services.css';

function Services() {
    return (
        <div className="services-list">
            <h2>Our Services</h2>
            {servicesData.map((service) => (
                <div key={service.id} className="service-item">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Services;