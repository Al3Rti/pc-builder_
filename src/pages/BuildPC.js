import React, { useState, useEffect } from 'react';
import styles from '../styles/BuildPC.module.css';

const BuildPC = () => {
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch('https://api.jsonbin.io/v3/b/6629e5cde41b4d34e4e8a6d2')
            .then(response => response.json())
            .then(data => {
                
                if (data.record && data.record.components) {
                    setComponents(data.record.components);
                } else {
                    setComponents([
                        { id: 1, name: 'Процессор Intel i7', price: 25000 },
                        { id: 2, name: 'Видеокарта NVIDIA RTX 4070', price: 60000 },
                        { id: 3, name: 'ОЗУ 32GB DDR5', price: 12000 },
                        { id: 4, name: 'SSD 1TB NVMe', price: 8000 },
                        { id: 5, name: 'Материнская плата Z790', price: 18000 },
                    ]);
                }
                setLoading(false);
            })
            .catch(() => {
                
                setComponents([
                    { id: 1, name: 'Процессор Intel i7', price: 25000 },
                    { id: 2, name: 'Видеокарта NVIDIA RTX 4070', price: 60000 },
                    { id: 3, name: 'ОЗУ 32GB DDR5', price: 12000 },
                    { id: 4, name: 'SSD 1TB NVMe', price: 8000 },
                    { id: 5, name: 'Материнская плата Z790', price: 18000 },
                ]);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.build}>
            <h1>Соберите свой ПК</h1>
            <p>Выберите компоненты из списка ниже:</p>

            {loading ? (
                <p>Загрузка компонентов...</p>
            ) : (
                <div className={styles.componentList}>
                    {components.map(comp => (
                        <div key={comp.id} className={styles.component}>
                            <h3>{comp.name}</h3>
                            <p>Цена: {comp.price} ₽</p>
                            <button>Добавить</button>
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.total}>
                <h2>Итоговая стоимость: 0 ₽</h2>
                <button className={styles.orderBtn}>Оформить заказ</button>
            </div>
        </div>
    );
};

export default BuildPC;
