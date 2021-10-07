import Card from '../../components/card';
import Select from '../../components/select';
import Dropdown, { OptionItemI } from '../../components/dropdown';

const mealHours: Array<OptionItemI> = [
    { value: 7, text: '7:00' },
    { value: 8, text: '8:00' },
    { value: 9, text: '9:00' },
];

export default function Test() {
    return (
        <>
            <div className='w3-col l6'>
                <Card title='Conditions'>
                    <Card isSecondary title='First meal of the day?'>
                        <Select defaultText='Choose an hour' options={mealHours} />
                    </Card>
                    <Card isSecondary title='First meal of the day?'>
                        <Dropdown defaultText='Choose an hour' options={mealHours} />
                    </Card>
                    <Card isSecondary title='Medicine(s)'>
                        <p>{'Name >'}</p>
                        <button>{'Add medicine'}</button>
                        <button>{'Time it'}</button>
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
