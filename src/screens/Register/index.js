import React from "react";
import "./style.scss";
import { Button } from "../../components";


const Register = () => {
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