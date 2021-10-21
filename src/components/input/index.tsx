import { ChangeEventHandler } from 'react';

interface InputI {
    placeholder?: string;
    value: string;
    handleValue: ChangeEventHandler<HTMLInputElement>;
    borderColor?: string;
}

export default function Input({ placeholder, value, handleValue, borderColor }: InputI) {
    return (
        <input
            className={`w3-input w3-border w3-border-${borderColor} w3-round`}
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={handleValue}
        />
    );
}
