import React from "react";
import "./style.scss";
import { HomeMessages, FaqMessages } from "../../constants/home.js";
import { Button, InputPassword, Layout, Textfield } from "../../components";
import HomeImage from "../../assets/images/Home-image.svg";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className='home-container'>
                <div className="left-size">
                    <div className='home-text'>
                        <label>{HomeMessages.title}</label>
                        <p>{HomeMessages.description}</p>
                    </div>
                        <InputPassword />
                        {/* <Textfield 
                            icon = "fa-envelope fa-regular"
                            type="text"
                            placeholder="Digite seu e-mail..."
                        > 
                                           
                            <Button 
                            variant="button-filled-green"
                            name="Teste grátis"
                            onClick={() => {
                                navigate("/#");
                                //fazer pop up de cadastro gmail
                            }}
                            />

                            
                        
                        </Textfield> */}
                   
                    <Button 
                    variant="gmail-button"
                    name="Entrar com Google"
                    onClick={() => {
                        navigate("/#");
                        //fazer pop up de cadastro gmail
                    }}
                    />
                </div>
                <img src={HomeImage} alt='illustration' />
            </div>

            <div className="home-footer">
                <div className="faq">
                    <label>Faq</label>
                    <div className="faq-container">
                        <ul>
                            {FaqMessages?.map((item) => (
                            <li className="card">{item?.question}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="contact">
                        
                </div>
            
            </div>
        </Layout>
    );
};

export default Home;