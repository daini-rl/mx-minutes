import { useState } from 'react';

import styles from './dropdown.module.css';

export interface OptionItemI {
    startItem?: JSX.Element;
    value: string | number;
    text: string | number;
}

interface DropdownI {
    labelText?: string;
    defaultText?: string;
    options: Array<OptionItemI>;
    value: string | number;
    handleDropdownValue: Function;
    borderColor?: string;
}

export default function Dropdown({
    labelText,
    defaultText = 'Choose your option',
    options,
    value,
    handleDropdownValue,
    borderColor,
}: DropdownI) {
    const [selectedIndex, setSelectedIndex] = useState(options.map(option => option.value).indexOf(value));
    const [isOpen, setIsOpen] = useState(false);

    const handleToogle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionItemClick = (index: number) => {
        setSelectedIndex(index);
        handleDropdownValue(options[index].value);
        setIsOpen(false);
    };

    return (
        <div className={`w3-dropdown-click ${styles.dropdownContainer}`}>
            {labelText && (
                <label className={styles.dropdownLabel}>
                    <b>{labelText}</b>
                </label>
            )}
            <button
                onClick={handleToogle}
                className={`w3-button w3-white w3-border w3-border-${borderColor} w3-round ${styles.dropdownButton}`}>
                {selectedIndex === -1 ? defaultText : options[selectedIndex].text}
                <span className='w3-margin-left'>
                    <i className='fa fa-caret-down'></i>
                </span>
            </button>
            <div className={`w3-dropdown-content w3-bar-block w3-border ${isOpen ? 'w3-show' : ''}`}>
                {options?.map((option, index) => (
                    <button
                        key={index}
                        className={`w3-bar-item w3-button ${styles.dropdownOptionItemContainer}`}
                        onClick={() => handleOptionItemClick(index)}>
                        {option.startItem}
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
