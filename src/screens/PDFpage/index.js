import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Button, TextEditor } from "../../components";


const PDF = () => {
    const navigate = useNavigate();

    return (
        <div  className="container">
            <label>Pagina de pdf em construção</label>
            <TextEditor className="container-text"/>
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