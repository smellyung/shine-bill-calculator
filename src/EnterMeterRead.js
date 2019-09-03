import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function EnterMeterRead() {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value)
    }
    return (
        <div className='enter-meter-read'>
            <h1>Please enter your (Gas/Electricity) Meter Read:</h1>
            <div>
                <input type='number' value={value} onChange={handleChange}/>
                <Link to={{ pathname: '/gas-summary', value}} >
                    <button>
                        Submit
                    </button>
                </Link>
            </div>
        </div>
    );
}