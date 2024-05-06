import "./style.scss";


const Input = ({  variant, icon, placeholder, onChange, value, type }) => {
    return (
        <div>
            <input
            className={`input ${variant}`} //se for password aplica o efeito da password
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            />
            {icon && <img src={icon} alt="icon" />}

        </div>
    );
}


export default Input;