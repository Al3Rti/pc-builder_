import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 PC Builder. Все права защищены.</p>
            <p>Свяжитесь с нами: info@pcbuilder.ru</p>
        </footer>
    );
};

export default Footer;
