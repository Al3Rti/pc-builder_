import React from 'react';
import styles from '../styles/Orders.module.css';

const Orders = () => {
    const orders = [
        { id: 1, date: '18.01.2025', total: 125000, status: 'Доставлен' },
        { id: 2, date: '23.03.2025', total: 89000, status: 'В обработке' },
        { id: 3, date: '22.04.2025', total: 210000, status: 'Собирается' },
    ];

    return (
        <div className={styles.orders}>
            <h1>Мои заказы</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID заказа</th>
                        <th>Дата</th>
                        <th>Сумма</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.total} ₽</td>
                            <td>
                                <span className={`${styles.status} ${styles[order.status.toLowerCase().replace(' ', '')]}`}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
