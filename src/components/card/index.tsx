import styles from './card.module.css';

interface CardProps {
    title?: string;
    children: JSX.Element | JSX.Element[];
    isSecondary?: boolean;
    buttons?: JSX.Element | JSX.Element[];
}

export default function Card({ title, children, isSecondary, buttons }: CardProps) {
    return (
        <div className='w3-container w3-border-bottom w3-padding-16'>
            {title && (isSecondary ? <h4>{title}</h4> : <h4 className={styles.primaryTitle}>{title}</h4>)}
            {children}
            {buttons && <div className={styles.buttonsRow}>{buttons}</div>}
        </div>
    );
}
