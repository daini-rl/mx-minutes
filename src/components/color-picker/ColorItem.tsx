import styles from './colorItem.module.css';

interface ColorItemI {
    color: string;
}

export default function ColorItem({ color }: ColorItemI) {
    return <i className={`w3-${color} w3-round-large ${styles.colorItem}`}></i>;
}
