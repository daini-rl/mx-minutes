import { OptionItemI } from '../dropdown';

interface SelectI {
    defaultText?: string;
    options: Array<OptionItemI>;
}

export default function Select({ defaultText = 'Choose your option', options }: SelectI) {
    return (
        <select className='w3-select w3-border w3-round' name='option' defaultValue='default'>
            <option value='default' disabled>
                {defaultText}
            </option>
            {options.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.text}
                </option>
            ))}
        </select>
    );
}
