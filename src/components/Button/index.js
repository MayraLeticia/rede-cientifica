import "./style.scss";


const Button = ({ variant, icon, name, onClick }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            <label>{name}</label>
            {icon && <img src={icon} alt="icon" />}
        </button>
    );
}


export default Button;
