import React from 'react';
import './footer.css';

const Footer = ({year}) => {
    return (
        <footer>
            <span>© React Blog - {year}</span>
        </footer>
    );
};

export default Footer;