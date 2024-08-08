import React from "react";
import "./style.scss";
import { LoginMessages, FaqMessages, ContactDB } from "../../constants/login.js";
import { Button, InputPassword, Layout, Input } from "../../components";
import LoginImage from "../../assets/images/Login-image.svg";
import Google from "../../assets/icons/Google.svg";
import Meta from "../../assets/icons/Meta.svg";
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
                    <InputPassword 
                        icon = "fa-solid fa-unlock-keyhole"
                        placeholder="Senha"        
                    />
                   
                    <Button 
                    variant="login-button button-filled-red"
                    name="Entrar"
                    onClick={() => {
                        navigate("/perfil");
                    }}
                    />
                    <div className='divider'>ou</div>
                    <div className="alternative-login">
                        <Button 
                            variant="button-border-red"
                            name="Google"
                            icon={Google}
                            onClick={() => {navigate("/#")}}
                        />
                        <Button 
                            variant="button-border-red"
                            name="Meta"
                            icon={Meta}
                            onClick={() => {navigate("/#")}}
                        />
                    </div>
                </div>
                <img src={LoginImage} alt='illustration' />
            </div>
        </Layout>
    );
}


export default Login;