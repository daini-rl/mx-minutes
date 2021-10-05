import Card from './components/card';

function App() {
    return (
        <div className='w3-row-padding w3-padding'>
            <div className='w3-col l6'>
                <Card
                    title='Conditions'
                    children={
                        <>
                            <Card isSecondary title='First meal of the day?' children={<p>{'Time >'}</p>} />
                            <Card isSecondary title='Medicine(s)' children={<p>{'Name >'}</p>} />
                            <p>Add medicine</p>
                            <p>Time it</p>
                        </>
                    }
                />
            </div>
            <div className='w3-col l6'>
                <Card
                    title='Mx. Minutes says:'
                    children={
                        <>
                            <Card isSecondary title='First day:' children={<p>{'11:11'}</p>} />
                            <Card isSecondary title='Next day:' children={<p>{'4:20'}</p>} />
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default App;
