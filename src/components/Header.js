import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">PC Builder</Link>
            </div>
            <nav className={styles.nav}>
                <Link to="/">Главная</Link>
                <Link to="/build">Собрать ПК</Link>
                <Link to="/orders">Мои заказы</Link>
            </nav>
        </header>
    );
};

export default Header;
