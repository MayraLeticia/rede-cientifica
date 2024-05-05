import React from "react";
import "./style.scss";
import { Layout } from "../../components";
import { HomeMessages } from "../../constants/home.js";

function Home() {
    return (
        <Layout>
            <div className="container">
                <div className="left-side">
                    <div className="home-title">
                        <label>{HomeMessages.title}</label>
                        <p>{HomeMessages.description}</p>
                    </div>
                    
                </div>

            </div>

        </Layout>
    );
}


export default Home;