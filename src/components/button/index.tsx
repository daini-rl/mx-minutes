import { MouseEventHandler } from 'react';

import styles from './button.module.css';

interface ButtonI {
    buttonText: string;
    buttonVariant?: 'contained' | 'outlined';
    buttonType?: 'button' | 'submit' | 'reset';
    buttonStateType?: 'success' | 'info' | 'danger';
    buttonColor?: string;
    paddingSize?: 'medium' | 'small';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export default function Button({
    buttonText,
    buttonVariant,
    buttonType,
    buttonStateType,
    buttonColor,
    paddingSize,
    onClick,
    disabled,
}: ButtonI) {
    const buttonStateColor =
        buttonStateType === 'success' ? 'green' : buttonStateType === 'info' ? 'blue' : 'red';

    return (
        <button
            className={`w3-button w3-round ${
                buttonVariant === 'outlined'
                    ? `w3-border w3-border-${buttonStateType ? buttonStateColor : buttonColor}`
                    : `w3-${buttonStateType ? buttonStateColor : buttonColor}`
            } w3-padding-${paddingSize === 'small' ? 'small' : ''} ${styles.button}`}
            type={buttonType}
            onClick={onClick}
            disabled={disabled}>
            {buttonText}
        </button>
    );
}
