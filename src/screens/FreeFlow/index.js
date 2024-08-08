import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.scss";
import { Button, Textfield, Layout } from "../../components";
import Lamp from "../../assets/icons/Lamp.svg";


const steps = [

    { 
        title: "Qual a sua universidade?",
        placeholder: "Digite a sigla",
        id: 1
    },
    
    { 
        title: "Sobre qual tema você deseja pesquisar?",
        placeholder: "Digite o seu tema",
        description: "Digite no Google Scholar palavras-chaves do subtema da sua área prática ou aspecto que te interessaria pesquisar e filtre os últimos 3 anos. Que lacunas identifica?",
        icon: { Lamp },
        id: 2
    },
    
    { 
        title: "Digite o Título do seu projeto:",
        placeholder: "Digite o seu titulo",
        description: "Deve sintetizar de maneira clara o que vai fazer na dissertação, ou seja ter relação com o objetivo geral. Pode ser usado recurso de título e subtítulo. \nDeve conter as categorias que vai trabalhar no projeto.",
        icon: { Lamp },
        id: 3
    }
];


const FreeFlow = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(null);

    useEffect(() => {
        const step = steps.find(step => step.id === parseInt(id));
        setCurrentStep(step);
    }, [id]);

    const handleNextClick = () => {
        const nextId = parseInt(id) + 1;
        if (nextId <= steps.length) {
            navigate(`/freeflow/${nextId}`);
        } else {
            navigate(`/PDF`);
        }
    };

    if (!currentStep) {
        return(
            <Layout>
            <div className="freeflow">
                <div className="freeflow-container">
                    <div className="handle-loading">Loading...</div>
                </div>
            </div>
            </Layout>
        ) 
    }

    return (
        <Layout>
            <div className="freeflow">
                <div className="freeflow-container">
                    <label>{currentStep.title}</label>
                    <Textfield 
                        type="text"
                        placeholder={currentStep.placeholder}
                        onChange={() => {}}
                        description={currentStep.description}
                        variant="btn-below"
                    >
                        <Button 
                            variant="button-filled-red"
                            name="Proximo"
                            onClick={handleNextClick}
                        />
                    </Textfield>
                </div>
            </div>
        </Layout>
    );
}


export default FreeFlow;