import React from 'react';

import styles from './AddCard.module.scss';

const AddCard: React.FC = () => {
  return (
    <div className={styles.add_card}>
      <div className={styles.header_container}>
        <span className={styles.card_title}>Add city</span>
      </div>
      <div className={styles.body_container}>
        <svg className={styles.add_icon}></svg>
        <svg
          className={styles.city_illustration}
          id="City_Illustration"
          data-name="City Illustration"
          viewBox="1367.8 616.6 403.6 331.4"
        >
          {/* <defs>
      .... */}
        </svg>
        {/* <svg className={styles.city_illustration}></svg> */}
      </div>
    </div>
  );
};

export default AddCard;
