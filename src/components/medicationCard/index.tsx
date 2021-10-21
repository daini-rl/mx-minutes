import { useState, ChangeEvent } from 'react';

import { Card, Input, Dropdown, Label, Checkbox, Button, Badge } from '../../components';
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

    /* this might be useful in the future... or in the past
    const handleMedicationColor = (tempColor: string) => {
        setMedicationColor(tempColor);
    };
    */

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
        clearState(); // might be useless in the future...
    };

    const saveButtonIsDisabled =
        medicationName === '' ||
        medicationColor === '' ||
        medicationFrequency === -1 ||
        (!medicationAtBreakfast ? medicationStartHour === -1 : false);

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
        <Card border borderColor={medicationColor}>
            {!isActive ? (
                <>
                    <div className={styles.medicationInactiveCardRow}>
                        <h5 className={styles.medicationInactiveName}>
                            <Badge color={medicationColor} />
                            {medicationName}
                        </h5>
                    </div>
                    <div className={styles.medicationInactiveCardRow}>
                        <p>{'Every ' + medicationFrequency + ' hours'}</p>
                        <p>
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
                                value={medicationColor}
                                handleDropdownValue={setMedicationColor}
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
                                value={medicationFrequency}
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
                                    value={medicationStartHour}
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
                    {isActive ? (
                        <Button
                            buttonText={'Save'}
                            buttonVariant='outlined'
                            buttonStateType='info'
                            paddingSize='small'
                            disabled={saveButtonIsDisabled}
                            onClick={handleSubmitMedication}
                        />
                    ) : (
                        <Button
                            buttonText={'Edit'}
                            buttonVariant='outlined'
                            buttonStateType='info'
                            paddingSize='small'
                            onClick={() => setIsActive(!isActive)}
                        />
                    )}
                </div>
            </div>
        </Card>
    );
}
