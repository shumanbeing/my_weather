import React from 'react';

import styles from './AddCard.module.scss';

const AddCard = () => {
  return (
    <div className={styles.add_card}>
      <div className={styles.header_container}>
        <span className={styles.card_title}>Add city</span>
      </div>
      <div className={styles.body_container}>
        <svg className={styles.add_icon}></svg>
        <svg className={styles.city_illustration}></svg>
      </div>
    </div>
  );
};

export default AddCard;
