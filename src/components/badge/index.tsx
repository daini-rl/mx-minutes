import styles from './badge.module.css';

interface BadgeI {
    color: string;
}

export default function Badge({ color }: BadgeI) {
    return <i className={`w3-${color} w3-round-large ${styles.dot}`}></i>;
}
