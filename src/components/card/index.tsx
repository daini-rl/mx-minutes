import styles from './card.module.css';

interface CardProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
    isSecondary?: boolean;
    border?: boolean;
    borderColor?: string;
    cardClassName?: string;
    buttons?: JSX.Element | JSX.Element[];
}

export default function Card({
    children,
    title,
    isSecondary,
    border,
    borderColor,
    cardClassName = '',
    buttons,
}: CardProps) {
    return (
        <div
            className={`w3-margin-bottom ${isSecondary ? styles.cardContainer : 'w3-padding-16'} ${
                isSecondary ? '' : 'w3-container'
            } ${
                border
                    ? `w3-round w3-border ${borderColor ? 'w3-border-' + borderColor : ''}`
                    : 'w3-border-bottom'
            } ${cardClassName}`}>
            {title && <h4>{title}</h4>}
            {children}
            {buttons && <div className={styles.buttonsRow}>{buttons}</div>}
        </div>
    );
}
