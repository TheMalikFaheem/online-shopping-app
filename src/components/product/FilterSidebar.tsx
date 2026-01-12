"use client";

import styles from './FilterSidebar.module.css';

export function FilterSidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.section}>
                <h3 className={styles.title}>Type</h3>
                <div className={styles.options}>
                    <label className={styles.checkbox}>
                        <input type="checkbox" /> Chelsea
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" /> Combat
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" /> Hiking
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" /> Chunky
                    </label>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.title}>Size</h3>
                <div className={styles.options} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {['7', '8', '9', '10', '11', '12'].map((size) => (
                        <label key={size} className={styles.checkbox} style={{ minWidth: '40px' }}>
                            <input type="checkbox" /> {size}
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.title}>Price Range</h3>
                <div className={styles.options}>
                    <label className={styles.checkbox}>
                        <input type="checkbox" /> $100 - $200
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" /> $200 - $300
                    </label>
                    <label className={styles.checkbox}>
                        <input type="checkbox" /> $300+
                    </label>
                </div>
            </div>
        </div>
    );
}
