import { ChangeEventHandler } from 'react';

import styles from './checkbox.module.css';

interface CheckboxI {
    checked: boolean;
    handleCheck: ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({ checked, handleCheck }: CheckboxI) {
    return (
        <input
            className={`w3-check ${styles.checkbox}`}
            type='checkbox'
            checked={checked}
            onChange={handleCheck}
        />
    );
}
