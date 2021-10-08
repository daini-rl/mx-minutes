import { useState, ChangeEvent } from 'react';

import Card from '../../components/card';
import Dropdown, { OptionItemI } from '../../components/dropdown';
import Input from '../../components/input';

const mealHours: Array<OptionItemI> = [
    { value: 6, text: '6:00' },
    { value: 7, text: '7:00' },
    { value: 8, text: '8:00' },
    { value: 9, text: '9:00' },
];

export default function Test() {
    const [mealHour, setMealHour] = useState(-1);
    const [name, setName] = useState('');

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    /* const handleMealHour = (hour: number) => {
        setMealHour(hour); // replace by dispatch in future
    }; */

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
                            value={name}
                            handleValue={handleName}
                            borderColor=''
                        />
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
