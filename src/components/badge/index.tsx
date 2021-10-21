import styles from './badge.module.css';

interface BadgeI {
    color: string;
}

export default function Badge({ color }: BadgeI) {
    return (
        <span className='w3-margin-right'>
            <i className={`w3-${color} w3-round-large ${styles.dotMotion}`}></i>
        </span>
    );
}
