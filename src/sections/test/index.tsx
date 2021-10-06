import Card from '../../components/card';

export default function Test() {
    return (
        <>
            <div className='w3-col l6'>
                <Card title='Conditions'>
                    <Card isSecondary title='First meal of the day?'>
                        <p>{'Time >'}</p>
                    </Card>
                    <Card isSecondary title='Medicine(s)'>
                        <p>{'Name >'}</p>
                    </Card>
                    <button>{'Add medicine'}</button>
                    <button>{'Time it'}</button>
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
