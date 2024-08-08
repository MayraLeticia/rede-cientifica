import React from "react";
import "./style.scss";
import { Button } from "../../components";


const PDF = () => {
    return (
        <div>
            <label>Pagina de pdf em construção</label>
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


export default PDF;