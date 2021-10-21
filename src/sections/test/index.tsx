import { useState } from 'react';

import { Card, Badge, Dropdown, Button, MedicationCard, DayCard, Label } from '../../components';
import { MedicationDayI } from '../../components/dayCard';
import { OptionItemI } from '../../components/dropdown';

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

const medicationStartHours: Array<OptionItemI> = [
    { value: 8, text: '8:00' },
    { value: 9, text: '9:00' },
    { value: 10, text: '10:00' },
    { value: 11, text: '11:00' },
];

const testMedicationDay: MedicationDayI = {
    dayName: 'Menu of the Day',
    medications: [
        { color: 'orange', name: 'Tussin', scheduledHours: [0, 8, 16] },
        { color: 'indigo', name: 'Ketorolaco', scheduledHours: [8, 20] },
        { color: 'lime', name: 'Redotson', scheduledHours: [10] },
    ],
};

export default function Test() {
    const [mealHour, setMealHour] = useState(-1);
    const medicationsColors = colorPickerOptions(); // affect this as selected

    /* const handleMealHour = (hour: number) => {
        setMealHour(hour); // replace by dispatch in future
    }; */

    const handleSave = (medication: any) => {
        console.log(medication);
    };

    return (
        <>
            <div className='w3-col l6'>
                <Card>
                    <Card isSecondary title='Conditions:'>
                        <Card border>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                <div>
                                    <Label labelText='First meal of the day?' />
                                </div>
                                <div>
                                    <Dropdown
                                        defaultText='Choose an hour'
                                        options={mealHours}
                                        value={mealHour}
                                        handleDropdownValue={setMealHour}
                                    />
                                </div>
                            </div>
                        </Card>
                    </Card>
                    <Card
                        isSecondary
                        title='Medication(s):'
                        buttons={
                            <>
                                <Button buttonText={'Add medication'} buttonStateType='info' />
                                <Button buttonText={'Time it'} buttonStateType='success' />
                            </>
                        }>
                        <div className='multiple-cards-always?-inside-a-div'>
                            <MedicationCard
                                medicationsColors={medicationsColors}
                                frequencyHours={frequencyHours}
                                medicationStartHours={medicationStartHours}
                                handleSaveMedication={handleSave}
                            />
                            <MedicationCard
                                medicationsColors={medicationsColors}
                                frequencyHours={frequencyHours}
                                medicationStartHours={medicationStartHours}
                                handleSaveMedication={handleSave}
                            />
                        </div>
                    </Card>
                </Card>
            </div>
            <div className='w3-col l6'>
                <Card>
                    <Card isSecondary title='Mx. Minutes says:'>
                        <DayCard medicationDay={testMedicationDay} />
                    </Card>
                </Card>
            </div>
        </>
    );
}
