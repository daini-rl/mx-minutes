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
    handleDropdownValue: Function;
}

export default function Dropdown({
    labelText,
    defaultText = 'Choose your option',
    options,
    handleDropdownValue,
}: DropdownI) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
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
                className={`w3-button w3-white w3-border w3-round ${styles.dropdownButton}`}>
                {selectedIndex === -1 ? defaultText : options[selectedIndex].text}
                <span className='w3-margin-left'>
                    <i className='fa fa-caret-down'></i>
                </span>
            </button>
            <div className={`w3-dropdown-content w3-bar-block w3-border ${isOpen ? 'w3-show' : ''}`}>
                {options?.map((option, index) => (
                    <button
                        key={index}
                        className='w3-bar-item w3-button'
                        onClick={() => handleOptionItemClick(index)}>
                        {option.startItem && <span className='w3-margin-right'>{option.startItem}</span>}
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
