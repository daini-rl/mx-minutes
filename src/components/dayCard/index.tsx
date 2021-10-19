import { Card, Badge } from '../../components';

import styles from './dayCard.module.css';

export default function DayCard() {
    return (
        <Card isSecondary title='First day:'>
            <div>
                <div className={styles.hourSection}>
                    <h5>
                        <span className='w3-margin-right'>
                            <i className='fa fa-clock-o'></i>
                        </span>
                        {'11:00'}
                    </h5>
                    <div className={styles.medicationsList}>
                        <p className={styles.medicationTitle}>
                            <span className='w3-margin-right'>
                                <Badge color={'orange'} />
                            </span>
                            {'Tussin'}
                        </p>
                        <p className={styles.medicationTitle}>
                            <span className='w3-margin-right'>
                                <Badge color={'indigo'} />
                            </span>
                            {'Codeine'}
                        </p>
                        <p className={styles.medicationTitle}>
                            <span className='w3-margin-right'>
                                <Badge color={'pink'} />
                            </span>
                            {'Acetaminophen'}
                        </p>
                    </div>
                </div>
                <div className={styles.hourSection}>
                    <h5>
                        <span className='w3-margin-right'>
                            <i className='fa fa-clock-o'></i>
                        </span>
                        {'4:20'}
                    </h5>
                    <div className={styles.medicationsList}>
                        <p className={styles.medicationTitle}>
                            <span className='w3-margin-right'>
                                <Badge color={'indigo'} />
                            </span>
                            {'Codeine'}
                        </p>
                        <p className={styles.medicationTitle}>
                            <span className='w3-margin-right'>
                                <Badge color={'pink'} />
                            </span>
                            {'Acetaminophen'}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
