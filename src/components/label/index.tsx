import styles from './label.module.css';

interface LabelI {
    labelText: string;
    textColor?: string;
}

export default function Label({ labelText, textColor }: LabelI) {
    return (
        <label className={`w3-text-${textColor} ${styles.label}`}>
            <b>{labelText}</b>
        </label>
    );
}
