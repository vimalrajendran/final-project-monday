import React, { useState } from "react";
import './bmi.css';

export default function BMI() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');


    let calcBmi = (e) => {
        e.preventDefault()
        if (weight === 0 || height === 0) {
            alert('please enter a valid weight and height')
        } else {
            let bmi = (weight / (height * height))
            setBmi(bmi.toFixed(1))

            if(bmi < 19) {
                setMessage('You are underweight, Eat more Healthy stuff')
            } else if (bmi >= 19 && bmi < 25) {
                setMessage('Congratulations! You are a healthy weight')
            } else {
                setMessage('You are overweight, need to burn few Calories')
            }
        }
    }

    let imgSrc;

    if (bmi < 1) {
        imgSrc = null
    } else {
        if(bmi < 19) {
            imgSrc = require('./img/uw.jpg')
        } else if (bmi >= 19 && bmi < 25) {
            imgSrc = require('./img/normalweight.jpg')
        } else {
            imgSrc = require('./img/ow.jpg')
        }
    }

    let reset = () => {
        window.location.reload();
    }


    return (
        <div className="ap">
            <div className='cont'>
                <div className='cent'>
                    <h2>Check your BMI</h2>
                    <form onSubmit={calcBmi}>
                        <div>
                            <label>Weight (Kgs)</label>
                            <input className="inp" value={weight} onChange={(e) => setWeight(e.target.value) } />
                        </div>
                        <div>
                            <label>Height (m)</label>
                            <input className="inp" value={height} onChange={(e) => setHeight(e.target.value) } />
                        </div>
                        <div>
                            <button className='bt' type='submit'>Submit</button>
                            <button className='bt bt-outline' type='submit' onClick={reset}>Reset</button>
                        </div>
                    </form>

                    <div className='cent'>
                        <h3>Your BMI is: {bmi}</h3>
                        <p className="para">{message}</p>
                    </div>
                    <div className='img-container'>
                        <img src={imgSrc} ></img>

                    </div>
                </div>
            </div>
        </div>
    )
}