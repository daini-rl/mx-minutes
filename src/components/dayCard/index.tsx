import { Card, Badge } from '../../components';

import styles from './dayCard.module.css';

export default function DayCard() {
    return (
        <>
            <Card border cardClassName={styles.dayCardContainer}>
                <h5 className='w3-center'>First Day</h5>
                <div>
                    <h6>
                        <span className='w3-margin-right'>
                            <i className='fa fa-clock-o'></i>
                        </span>
                        {'11:11'}
                    </h6>
                    <div className={styles.medicationsList}>
                        <p>
                            <Badge color={'orange'} />
                            {'Tussin'}
                        </p>
                        <p>
                            <Badge color={'indigo'} />
                            {'Codeine'}
                        </p>
                        <p>
                            <Badge color={'pink'} />
                            {'Acetaminophen'}
                        </p>
                    </div>
                </div>
                <div>
                    <h6>
                        <span className='w3-margin-right'>
                            <i className='fa fa-clock-o'></i>
                        </span>
                        {'4:20'}
                    </h6>
                    <div className={styles.medicationsList}>
                        <p>
                            <Badge color={'indigo'} />
                            {'Codeine'}
                        </p>
                        <p>
                            <Badge color={'pink'} />
                            {'Acetaminophen'}
                        </p>
                    </div>
                </div>
            </Card>
            <Card border cardClassName={styles.dayCardContainer}>
                <h5 className='w3-center'>Next Day</h5>
                <div>
                    <h6>
                        <span className='w3-margin-right'>
                            <i className='fa fa-clock-o'></i>
                        </span>
                        {'01:11'}
                    </h6>
                    <div className={styles.medicationsList}>
                        <p>
                            <Badge color={'orange'} />
                            {'Tussin'}
                        </p>
                    </div>
                </div>
            </Card>
        </>
    );
}
