import React, { useState } from "react";
import "./style.scss";
import { Input } from "../../components";
import Lamp from "../../assets/icons/Lamp.svg";



const Textfield = ({ icon, type, input, placeholder, value, onChange, children, variant, description }) => {

    const [showDescription, setShowDescription] = useState(false);

    const handleIconClick = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="textfield">
            <div className="input-textfield-container">
                <Input 
                    type={type}
                    className={input} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    icon = {icon}
                />
                {description && (
                    <img 
                        src={Lamp} 
                        alt="Lamp" 
                        className="icon-lamp" 
                        onClick={handleIconClick} 
                    />
                )}
            </div>
            {showDescription && description && (
                <div className="description-box">
                    <p>{description}</p>
                </div>
            )}
            <div className={`layout ${variant}`}>{children}</div>
            {/* variant pode ser two-btn, btn-below, btn-side-left, btn-side-right */}
        </div>
    );
}


export default Textfield;