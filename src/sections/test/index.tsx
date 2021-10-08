import { useState, ChangeEvent } from 'react';

import Card from '../../components/card';
import Badge from '../../components/badge';
import Dropdown, { OptionItemI } from '../../components/dropdown';
import Input from '../../components/input';

import { w3cssColors } from '../../utils/colors';

const mealHours: Array<OptionItemI> = [
    { value: 6, text: '6:00' },
    { value: 7, text: '7:00' },
    { value: 8, text: '8:00' },
    { value: 9, text: '9:00' },
];

const colorPickerOptions = (): Array<OptionItemI> => {
    const colorOptions: Array<OptionItemI> = w3cssColors.map(color => ({
        startItem: <Badge color={color.value} />,
        value: color.value,
        text: color.name,
    }));
    return colorOptions;
};

export default function Test() {
    const [mealHour, setMealHour] = useState(-1);
    const [medicineName, setMedicineName] = useState('');
    const [medicineColor, setMedicineColor] = useState('');

    const medicinesColors = colorPickerOptions(); // affect this as selected

    /* const handleMealHour = (hour: number) => {
        setMealHour(hour); // replace by dispatch in future
    }; */

    const handleMedicineName = (event: ChangeEvent<HTMLInputElement>) => {
        setMedicineName(event.target.value);
    };

    const handleMedicineColor = (tempColor: string) => {
        setMedicineColor(tempColor); // extra step but will be useful in the future... or in the past
    };

    return (
        <>
            <div className='w3-col l6'>
                <Card title='Conditions'>
                    <Card isSecondary title='First meal of the day?'>
                        <Dropdown
                            defaultText='Choose an hour'
                            options={mealHours}
                            handleDropdownValue={setMealHour}
                        />
                    </Card>
                    <Card isSecondary title='Medicine(s)'>
                        <Input
                            placeholder='Medicine Name'
                            value={medicineName}
                            handleValue={handleMedicineName}
                            borderColor=''
                        />
                        <Dropdown
                            defaultText='Pick a color'
                            options={medicinesColors}
                            handleDropdownValue={handleMedicineColor}
                        />
                        <br />
                        <p
                            className={`w3-border w3-border-${medicineColor} w3-round`}
                            style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <span className='w3-margin-right'>
                                <Badge color={medicineColor} />
                            </span>
                            Sample Text
                        </p>
                        <br />
                        <button className='w3-button w3-white w3-border w3-round'>{'Add medicine'}</button>
                        <button className='w3-button w3-white w3-border w3-round'>{'Time it'}</button>
                    </Card>
                </Card>
            </div>
            <div className='w3-col l6'>
                <Card title='Mx. Minutes says:'>
                    <Card isSecondary title='First day:'>
                        <p>{'11:11'}</p>
                    </Card>
                    <Card isSecondary title='Next day:'>
                        <p>{'4:20'}</p>
                    </Card>
                </Card>
            </div>
        </>
    );
}
