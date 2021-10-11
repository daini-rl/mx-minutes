import { ChangeEventHandler } from 'react';

interface CheckboxI {
    checked: boolean;
    handleCheck: ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({ checked, handleCheck }: CheckboxI) {
    return <input className='w3-check' type='checkbox' checked={checked} onChange={handleCheck} />;
}
