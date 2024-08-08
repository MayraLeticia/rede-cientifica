import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";


const Profile = () => {
    const navigate = useNavigate();

    return (
        <div>
            <label>Pagina de perfil em construção</label>
            <Button 
                variant="button-filled-green"
                name="Avançar"
                onClick={() => {
                    navigate("/freeflow/1");
                }}
            />        
        </div>
    );
}


export default Profile;