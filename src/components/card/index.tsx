import styles from './card.module.css';

interface CardProps {
    title: string | JSX.Element | JSX.Element[];
    children: JSX.Element | JSX.Element[];
    isSecondary?: boolean;
    buttons?: JSX.Element | JSX.Element[];
}

export default function Card({ title, children, isSecondary, buttons }: CardProps) {
    return (
        <div className='w3-container w3-border-bottom w3-padding-16'>
            {isSecondary ? <h3>{title}</h3> : <h2>{title}</h2>}
            {children}
            {buttons && <div className={styles.buttonsRow}>{buttons}</div>}
        </div>
    );
}
