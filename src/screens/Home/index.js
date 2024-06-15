import React from "react";
import "./style.scss";
import { HomeMessages, FaqMessages, ContactDB } from "../../constants/home.js";
import { Button, InputPassword, Layout, Textfield, TextEditor } from "../../components";
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

                    <Textfield 
                        icon = "fa-envelope fa-regular"
                        type="text"
                        placeholder="Digite seu e-mail..."
                        variant = "btn-side-right"
                    > 
                                        
                        <Button 
                        variant="button-filled-green"
                        name="Teste grátis"
                        onClick={() => {
                            navigate("/#");
                            //fazer pop up de cadastro gmail
                        }}
                        />

                    </Textfield>
                   
                    <Button 
                    variant="gmail-button"
                    name="Entrar com Google"
                    onClick={() => {
                        navigate("/#");
                        //fazer pop up de cadastro gmail
                    }}
                    />
                    <TextEditor />
                    
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
                        <label>contact</label>
                    <div className="contact-container">
                        <ul>
                            {ContactDB?.map((item) => (
                            <li className="card">{item?.icon}{item?.content}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            
            </div>
        </Layout>
    );
};

export default Home;