import React, { useState } from "react";
// import './Form.css'; // Import the CSS file

let storedata = {
    name: "",
    email: "",
    password: "",
    city: "",
    gender: "",
    ismaried: false
};

export default function Form() {
    const [data, setData] = useState(storedata);

    let { name, email, password, city, gender, ismaried } = data;

    const handlechange = (e) => {
        const { name, type, value, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <>
            <form className="form-container" action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handlechange} 
                    value={name}  
                    placeholder="Enter Your Name" 
                    className="input-field"
                />
                <input 
                    name="email" 
                    type="email" 
                    onChange={handlechange} 
                    value={email} 
                    placeholder="Enter Your Email" 
                    className="input-field"
                />
                <input 
                    name="password" 
                    type="password" 
                    value={password} 
                    onChange={handlechange} 
                    placeholder="Enter Your Password" 
                    className="input-field"
                />
                <select 
                    name="city" 
                    value={city} 
                    onChange={handlechange} 
                    className="input-field"
                >
                    <option value="">--select your city</option>
                    <option value="Surat">Surat</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Dwaraka">Dwaraka</option>
                </select>
                <div className="radio-group">
                    <label>
                        <input 
                            type="radio" 
                            value="male" 
                            onChange={handlechange} 
                            name="gender" 
                            checked={gender === 'male'}
                        /> Male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="female" 
                            onChange={handlechange} 
                            name="gender" 
                            checked={gender === 'female'}
                        /> Female
                    </label>
                </div>
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        onChange={handlechange} 
                        checked={ismaried} 
                        name="ismaried" 
                    /> IsMarried
                </label>
                <input type="submit" className="submit-button" />
            </form>
        </>
    );
}
