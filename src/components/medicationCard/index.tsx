import { useState, ChangeEvent } from 'react';

import { Input, Dropdown, Label, Checkbox, Button, Badge } from '../../components';
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
    const [isActive, setIsActive] = useState(true);

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
        setIsActive(!isActive);
    };

    return (
        <div
            className={`w3-container w3-padding-16 w3-margin-bottom w3-border w3-border-${medicationColor} w3-round`}>
            {!isActive ? (
                <>
                    <div className={styles.medicationInactiveCardRow}>
                        <div className={styles.medicationInactiveName}>
                            <span className='w3-margin-right'>{<Badge color={medicationColor} />}</span>
                            <h5 className={styles.medicationInactiveText}>{medicationName}</h5>
                        </div>
                    </div>
                    <div className={styles.medicationInactiveCardRow}>
                        <p className={styles.medicationInactiveText}>
                            {'Every ' + medicationFrequency + ' hours'}
                        </p>
                        <p className={styles.medicationInactiveText}>
                            {'Starting at ' +
                                (medicationAtBreakfast ? 'breakfast' : medicationStartHour + ' am')}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.medicationCardRow}>
                        <div>
                            <Input
                                placeholder='Medication Name'
                                value={medicationName}
                                handleValue={handleMedicationName}
                            />
                        </div>
                        <div>
                            <Dropdown
                                defaultText='Pick a color'
                                options={medicationsColors}
                                handleDropdownValue={handleMedicationColor}
                            />
                        </div>
                    </div>
                    <div className={styles.medicationCardRow}>
                        <div>
                            <Label labelText='Frequency' />
                        </div>
                        <div>
                            <Dropdown
                                defaultText='Choose a frequency'
                                options={frequencyHours}
                                handleDropdownValue={setMedicationFrequency}
                            />
                        </div>
                    </div>
                    <div className={styles.medicationCardRow}>
                        <div>
                            <Label labelText='Start at breakfast' />
                        </div>
                        <div>
                            <Checkbox
                                checked={medicationAtBreakfast}
                                handleCheck={handleMedicationAtBreakfast}
                            />
                        </div>
                    </div>
                    {!medicationAtBreakfast && (
                        <div className={styles.medicationCardRow}>
                            <div>
                                <Label labelText='Start at' />
                            </div>
                            <div>
                                <Dropdown
                                    defaultText='Choose an hour'
                                    options={medicationStartHours}
                                    handleDropdownValue={setMedicationStartHour}
                                />
                            </div>
                        </div>
                    )}
                </>
            )}
            <div className={`${styles.medicationCardButtonsRow} ${!isActive ? 'w3-margin-top' : ''}`}>
                <div>
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
                        buttonText={isActive ? 'Save' : 'Edit'}
                        buttonVariant='outlined'
                        buttonStateType='info'
                        paddingSize='small'
                        onClick={handleSubmitMedication}
                    />
                </div>
            </div>
        </div>
    );
}
