import { Card, Badge } from '../../components';

import styles from './dayCard.module.css';

interface MedicationI {
    // id: uuid ?
    name: string;
    color: string;
    scheduledHours: Array<number>;
}

export interface MedicationDayI {
    dayName: string;
    medications: Array<MedicationI>;
}

interface DayCardI {
    medicationDay: MedicationDayI;
}

export default function DayCard({ medicationDay }: DayCardI) {
    const medicationHours = medicationDay.medications.flatMap(medication => medication.scheduledHours);
    const medicationHoursFiltered = medicationHours.filter(
        (medicationHour, index) => medicationHours.indexOf(medicationHour) === index
    );
    const medicationsGroupedByHours = medicationHoursFiltered.map(scheduledHour => {
        const medicationGroup = {
            scheduledHour,
            medications: medicationDay.medications.filter(medication =>
                medication.scheduledHours.includes(scheduledHour)
            ),
        };
        return medicationGroup;
    });
    return (
        <Card border cardClassName={styles.dayCardContainer}>
            <h5 className='w3-center'>{medicationDay.dayName}</h5>
            <>
                {medicationsGroupedByHours.map(medicationsGroup => (
                    <div key={medicationsGroup.scheduledHour}>
                        <h6>
                            <span className='w3-margin-right'>
                                <i className='fa fa-clock-o'></i>
                            </span>
                            {medicationsGroup.scheduledHour}
                        </h6>
                        <div className={styles.medicationsList}>
                            {medicationsGroup.medications.map(medication => (
                                <p key={medication.name}>
                                    <Badge color={medication.color} />
                                    {medication.name}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </>
        </Card>
    );
}
