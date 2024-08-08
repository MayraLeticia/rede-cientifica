import React from "react";
import "./style.scss";
import { Button } from "../../components";


const Profile = () => {
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