import { useState, ChangeEvent } from 'react';

import Card from '../../components/card';
import Badge from '../../components/badge';
import Dropdown, { OptionItemI } from '../../components/dropdown';
import Input from '../../components/input';
import Label from '../../components/label';
import Checkbox from '../../components/checkbox';
import Button from '../../components/button';

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

const frequencyHours: Array<OptionItemI> = [
    { value: 6, text: 'Every 6 hours' },
    { value: 8, text: 'Every 8 hours' },
    { value: 12, text: 'Every 12 hours' },
    { value: 24, text: 'Every 24 hours' },
];

const medicineStartHours: Array<OptionItemI> = [
    { value: 8, text: '8:00' },
    { value: 9, text: '9:00' },
    { value: 10, text: '10:00' },
    { value: 11, text: '11:00' },
];

export default function Test() {
    const [mealHour, setMealHour] = useState(-1);
    const [medicineName, setMedicineName] = useState('');
    const [medicineColor, setMedicineColor] = useState('');
    const [medicineFrequency, setMedicineFrequency] = useState(-1);
    const [medicineAtBreakfast, setMedicineAtBreakfast] = useState(true);
    const [medicineStartHour, setMedicineStartHour] = useState(-1);

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

    const handleMedicineAtBreakfast = (event: ChangeEvent<HTMLInputElement>) => {
        setMedicineAtBreakfast(event.target.checked);
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
                            borderColor={medicineColor}
                        />
                        <Dropdown
                            defaultText='Pick a color'
                            options={medicinesColors}
                            handleDropdownValue={handleMedicineColor}
                            borderColor={medicineColor}
                        />
                        <Label labelText='Frequency' textColor={medicineColor} />
                        <Dropdown
                            defaultText='Choose a frequency'
                            options={frequencyHours}
                            handleDropdownValue={setMedicineFrequency}
                            borderColor={medicineColor}
                        />
                        <Label labelText='Start at breakfast' textColor={medicineColor} />
                        <Checkbox checked={medicineAtBreakfast} handleCheck={handleMedicineAtBreakfast} />
                        <Label labelText='Start at' textColor={medicineColor} />
                        <Dropdown
                            defaultText='Choose an hour'
                            options={medicineStartHours}
                            handleDropdownValue={setMedicineStartHour}
                            borderColor={medicineColor}
                        />
                        <br />
                        <Button
                            buttonText={'Discard'}
                            buttonVariant='outlined'
                            buttonStateType='danger'
                            paddingSize='small'
                        />
                        <Button
                            buttonText={'Save'}
                            buttonVariant='outlined'
                            buttonColor={medicineColor}
                            paddingSize='small'
                        />
                        <br />
                        <Button buttonText={'Add medicine'} buttonStateType='info' />
                        <Button buttonText={'Time it'} buttonStateType='success' />
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
