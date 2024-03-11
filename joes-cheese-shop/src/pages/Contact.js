import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='content'>
            <h2>Contact</h2>
            <p>We'd love to hear from you! Whether you have a question about our products, need assistance with a cheese selection, or want to book a cheese tasting session, our team is here to help.</p>
            <h3>Get in touch</h3>
            <ul>
                <li>Phone: 123-456-7890</li>
                <li>Email: contact@joescheeseshop.com</li>
            </ul>
            <h3>Visit Us</h3>
            <ul>
                <li>Joe's Cheese Shop</li>
                <li>123 Cheese Street</li>
                <li>Cheesetown, CT12 3YZ</li>
                <li>United Kingdom</li>
            </ul>
            <h3>Opening Hours</h3>
            <ul>
                <li>Monday to Friday: 9am - 6pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Closed</li>
            </ul>
            <p>Follow us on social media for the latest updates and cheese-related fun!</p>
            <ul>
                <li>Facebook: @joescheeseshop</li>
                <li>Instagram: @joescheeseshop</li>
                <li>Twitter: @joescheeseshop</li>
            </ul>
            <p>We look forward to connecting with you!</p>
        </div>
    );
}

export default Contact;