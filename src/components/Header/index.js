import "./style.scss";
import Logo from "../../assets/images/Logo.svg";
import Crown from "../../assets/icons/Crown.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";


const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <img src={Logo} alt="Logo" onClick={() => {navigate("/home")}}/>
            <div className="header-buttons">
                <Button 
                variant="button-filled-green"
                name="Teste grátis"
                onClick={() => {
                    navigate("/#");
                    //fazer pop up de cadastro parcial de email
                }}
                />
                <Button 
                variant="button-border-red"
                name="Login"
                icon={Crown}
                onClick={() => {navigate("/login")}}
                />
            </div>
        </div>
    );
}


export default Header;