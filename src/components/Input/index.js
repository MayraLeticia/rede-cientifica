import "./style.scss";


const Input = ({ icon, type, variant, placeholder, value, onChange }) => {
    return (
        <div className={`input-container`}>
            <i className={`fa ${icon} icon`}></i>
            <input
                type={type}
                className={`input ${variant}`} 
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
            />
        </div>
    );
}


export default Input;