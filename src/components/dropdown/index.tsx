import { useState } from 'react';

import styles from './dropdown.module.css';

export interface OptionItemI {
    startItem?: JSX.Element;
    value: string | number;
    text: string | number;
}

interface DropdownI {
    defaultText?: string;
    options: Array<OptionItemI>;
}

export default function Dropdown({ defaultText = 'Choose your option', options }: DropdownI) {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w3-dropdown-click ${styles.dropdownContainer}`}>
            <button onClick={handleChange} className='w3-button w3-white w3-border w3-round'>
                {defaultText}
                <span className='w3-margin-left'>
                    <i className='fa fa-caret-down'></i>
                </span>
            </button>
            <div className={`w3-dropdown-content w3-bar-block w3-border ${isOpen ? 'w3-show' : ''}`}>
                {options?.map((option, index) => (
                    <button key={index} className='w3-bar-item w3-button' value={option.value}>
                        {option.startItem && <span className='w3-margin-right'>{option.startItem}</span>}
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
