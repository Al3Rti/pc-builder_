import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Добро пожаловать в PC Builder</h1>
            <p>Соберите свой идеальный компьютер с нуля!</p>
            <div className={styles.features}>
                <div className={styles.card}>
                    <h3>💻 Сборка ПК</h3>
                    <p>Выберите компоненты и соберите свою конфигурацию.</p>
                </div>
                <div className={styles.card}>
                    <h3>🚀 Быстрая доставка</h3>
                    <p>Получите готовый ПК уже через несколько дней.</p>
                </div>
                <div className={styles.card}>
                    <h3>🛡 Гарантия</h3>
                    <p>Гарантия на все компоненты — 2 года.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
