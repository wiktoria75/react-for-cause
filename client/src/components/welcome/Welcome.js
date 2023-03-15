import React from 'react';

function Welcome({ goToQuizes }) {

    return (
        <div className='Welcome'>
            Welcome
            <button onClick={goToQuizes}>Quizes</button>
        </div>
    )
}

export default Welcome