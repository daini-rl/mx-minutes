export interface OptionItemI {
    value: string | number;
    text: string | number;
}

interface SelectI {
    defaultText?: string;
    options: Array<OptionItemI>;
}

export default function Select({ defaultText = 'Choose your option', options }: SelectI) {
    return (
        <select className='w3-select w3-border w3-round' name='option'>
            <option value='' disabled selected>
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
