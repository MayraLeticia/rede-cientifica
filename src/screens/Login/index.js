import React from "react";
import "./style.scss";
import { LoginMessages, FaqMessages, ContactDB } from "../../constants/login.js";
import { Button, InputPassword, Layout, Input } from "../../components";
import LoginImage from "../../assets/images/Login-image.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <Layout>

            <div className='login-container'>
                <div className="left-size">
                    <div className='login-text'>
                        <label>{LoginMessages.title}</label>
                        <p>{LoginMessages.description}</p>
                    </div>
                        <Input 
                            icon = "fa-envelope fa-regular"
                            type="text"
                            placeholder="E-mail"
                        /> 
                        <InputPassword />
                   
                    <Button 
                    variant="gmail-button"
                    name="Entrar com Google"
                    onClick={() => {
                        navigate("/#");
                        //fazer pop up de cadastro gmail
                    }}
                    />
                </div>
                <img src={LoginImage} alt='illustration' />
            </div>
        </Layout>
    );
}


export default Login;