import React, { useState } from 'react';
import './style.scss'; 

const InputPassword = ({ variant, icon, placeholder, onChange, value }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`input-container`}>
            <div className={`placehoder-box`}>
                <i className={`fa ${icon} icon`}></i>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`password-input ${variant}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <i
                onClick={togglePasswordVisibility}
                className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} icon`}
            ></i>
        </div>
    );
};

export default InputPassword;