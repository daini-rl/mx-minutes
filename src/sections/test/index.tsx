import Card from '../../components/card';

export default function Test() {
    return (
        <>
            <div className='w3-col l6'>
                <Card title='Conditions'>
                    <Card isSecondary title='First meal of the day?' children={<p>{'Time >'}</p>} />
                    <Card isSecondary title='Medicine(s)' children={<p>{'Name >'}</p>} />
                    <p>Add medicine</p>
                    <p>Time it</p>
                </Card>
            </div>
            <div className='w3-col l6'>
                <Card title='Mx. Minutes says:'>
                    <Card isSecondary title='First day:' children={<p>{'11:11'}</p>} />
                    <Card isSecondary title='Next day:' children={<p>{'4:20'}</p>} />
                </Card>
            </div>
        </>
    );
}
