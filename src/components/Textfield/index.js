import "./style.scss";
import { Input } from "../../components";



const Textfield = ({ icon, type, input, placeholder, value, onChange, children, variant }) => {
    return (
        <div className="textfield">
            <Input 
                type={type}
                className={input} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                icon = {icon}
            />
            <div className={`layout ${variant}`}>{children}</div>
            {/* variant pode ser two-btn, btn-below, btn-side */}
        </div>
    );
}


export default Textfield;