import React, { useState, useEffect } from 'react';

export default function Summary(props) {
    // const [prevGasRead, setPrevGasRead] = useState({});
    // const [prevElectricityRead, setPrevElectricityRead] = useState({});
    // useEffect(() => {
    //     fetch('https://shine-energy.netlify.com/.netlify/functions/meter-readings', { headers: { accept: "Accept: application/json" } })
    //     .then(response => response.json())
    //     .then(previousReadings => console.log(previousReadings))
    //     .catch(() => console.log('Previous meter readings could not be fetched'))
    // }, []);
    const currentGasRead = parseInt(props.location.value);
    const previousGasRead = 11000;
    const gasReadDiff = currentGasRead - previousGasRead;
    const bill = 100*(0.1) + (gasReadDiff - 100)*(0.2);
    return (
        <div>
            <h1>GAS/ELECTRICITY BILL</h1>
            <div>
                <p>Your Gas/Electricity Bill has come to:</p>
                <p>£{bill}</p>
            </div>
        </div>
    );
}
