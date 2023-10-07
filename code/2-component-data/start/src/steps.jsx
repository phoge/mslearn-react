import React from 'react';

function Steps(props) {
    const steps = props.steps.map((step, index) => {
        return (
            <li key = {index}>
                {step}
            </li>
        );
    });

    return (
        <section>
        <h2>Ingredients</h2>
        <ol>
            {steps}
        </ol>
        </section>
    );
}

export default Steps;
