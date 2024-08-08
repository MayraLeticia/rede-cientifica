import "./style.scss";


const Input = ({ icon, type, variant, placeholder, value, onChange }) => {
    return (
        <div className={`input-box`}>
            <div className={`placehoder-box`}>
                <i className={`fa ${icon} icon`}></i>
                <input
                    type={type}
                    className={`input ${variant}`} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} 
                />
            </div>
        </div>
    );
}


export default Input;