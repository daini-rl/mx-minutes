import { useState, ChangeEvent } from 'react';

import { Input, Dropdown, Label, Checkbox, Button } from '../../components';
import { OptionItemI } from '../dropdown';

import styles from './medicationCard.module.css';

interface MedicationCardI {
    medicationsColors: Array<OptionItemI>;
    frequencyHours: Array<OptionItemI>;
    medicationStartHours: Array<OptionItemI>;
    handleSaveMedication: Function;
}

export default function MedicationCard({
    medicationsColors,
    frequencyHours,
    medicationStartHours,
    handleSaveMedication,
}: MedicationCardI) {
    const [medicationName, setMedicationName] = useState('');
    const [medicationColor, setMedicationColor] = useState('');
    const [medicationFrequency, setMedicationFrequency] = useState(-1);
    const [medicationAtBreakfast, setMedicationAtBreakfast] = useState(true);
    const [medicationStartHour, setMedicationStartHour] = useState(-1);

    const handleMedicationName = (event: ChangeEvent<HTMLInputElement>) => {
        setMedicationName(event.target.value);
    };

    const handleMedicationColor = (tempColor: string) => {
        setMedicationColor(tempColor); // extra step but will be useful in the future... or in the past
    };

    const handleMedicationAtBreakfast = (event: ChangeEvent<HTMLInputElement>) => {
        setMedicationAtBreakfast(event.target.checked);
    };

    const clearState = () => {
        setMedicationName('');
        setMedicationColor('');
        setMedicationFrequency(-1);
        setMedicationAtBreakfast(true);
        setMedicationStartHour(-1);
    };

    const handleCancel = () => {
        clearState();
    };

    const handleSubmitMedication = () => {
        const medication = {
            medicationName,
            medicationColor,
            medicationFrequency,
            medicationAtBreakfast,
            medicationStartHour,
        };
        handleSaveMedication(medication);
    };

    return (
        <div className={`w3-container w3-padding-16 w3-border w3-border-${medicationColor} w3-round`}>
            <div className={`${styles.medicationCardRow}`}>
                <div>
                    <Input
                        placeholder='Medication Name'
                        value={medicationName}
                        handleValue={handleMedicationName}
                        borderColor={medicationColor}
                    />
                </div>
                <div>
                    <Dropdown
                        defaultText='Pick a color'
                        options={medicationsColors}
                        handleDropdownValue={handleMedicationColor}
                        borderColor={medicationColor}
                    />
                </div>
            </div>
            <div className={styles.medicationCardRow}>
                <div>
                    <Label labelText='Frequency' textColor={medicationColor} />
                </div>
                <div>
                    <Dropdown
                        defaultText='Choose a frequency'
                        options={frequencyHours}
                        handleDropdownValue={setMedicationFrequency}
                        borderColor={medicationColor}
                    />
                </div>
            </div>
            <div className={styles.medicationCardRow}>
                <div>
                    <Label labelText='Start at breakfast' textColor={medicationColor} />
                </div>
                <div>
                    <Checkbox checked={medicationAtBreakfast} handleCheck={handleMedicationAtBreakfast} />
                </div>
            </div>
            <div className={styles.medicationCardRow}>
                <div>
                    <Label labelText='Start at' textColor={medicationColor} />
                </div>
                <div>
                    <Dropdown
                        defaultText='Choose an hour'
                        options={medicationStartHours}
                        handleDropdownValue={setMedicationStartHour}
                        borderColor={medicationColor}
                    />
                </div>
            </div>
            <div className={styles.medicationCardRow}>
                <div>
                    {' '}
                    <Button
                        buttonText={'Discard'}
                        buttonVariant='outlined'
                        buttonStateType='danger'
                        paddingSize='small'
                        onClick={handleCancel}
                    />
                </div>
                <div>
                    <Button
                        buttonText={'Save'}
                        buttonVariant='outlined'
                        buttonColor={medicationColor}
                        paddingSize='small'
                        onClick={handleSubmitMedication}
                    />
                </div>
            </div>
        </div>
    );
}
