import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";


const Register = () => {
    const navigate = useNavigate();

    return (
        <div>
            <label>Pagina de registro em construção</label>
            <Button 
                variant="button-filled-green"
                name="Avançar"
                onClick={() => {
                    navigate("/continuação/1");
                }}
            />        
        </div>
    );
}


export default Register;