import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.scss";
import { Button, Textfield, Layout } from "../../components";


const steps = [
    
    { 
        title: "1. Introdução - parte 1",
        description: "Contextualize um fenômeno real que deve investigado, em até 3 parágrafos. Escreva do assunto mais abrangente ao mais simples.\nInclua leis, jurisprudências, conceitos e, se tiver, dados estatísticos.",
        tip: "Evitar fazer citações.\nA introdução deve apresentar uma sintese sobre o fenômeno a ser investigado.",
        input: [
            {
                placeholder: "Seu texto aqui"
            }
        ],
        id: 1
    },
    { 
        title: "1. Introdução - parte 2",
        description: "Quais as lacunas teóricas? Quais aspectos que ainda não foram suficientemente esclarecidos? Quais pontos de impasse?",
        tip: "Evitar fazer citações.\nA introdução deve apresentar uma sintese sobre o fenômeno a ser investigado.",
        input: [
            {
                placeholder: "Seu texto aqui"
            },
        ],
        id: 2
    },
    { 
        title: "2. Pergunta de pesquisa",
        description: "Relacionada ao título e ao objetivo geral, a pergunta de pesquisa tem que ter plausibilidade, ser genuína no sentido de poder ser refutada e deve ser respondida ao final da dissertação ou tese.",
        tip: "Em que medida... / Como...\nDeixar em formato de questão (com interrogação ao final).\nEvitar perguntas cujas respostas se resumam a sim ou não.\nDe 1 a 3 perguntas no máximo.",
        input: [
            {
                placeholder: "Seu texto aqui"
            },
        ],
        id: 3
    },
    { 
        title: "3. Justificativa - parte 1",
        description: "Porque é importante? Qual a novidade que traz?\nJustifique a necessidade de uma pesquisa para esclarecer aqueles aspectos ainda não abordados por outras pesquisas.", 
        input: [
            {
                placeholder: "Seu texto aqui"
            },
        ],
        id: 4
    },
    { 
        title: "3. Justificativa - parte  2",
        input: [
            {
                title: "Relevância para a sociedade? (1 frase)",
                placeholder: "Seu texto aqui"
            },
            {
                title: "Relevância para a pesquisa jurídica? (1 frase)",
                placeholder: "Seu texto aqui"
            },
            {
                title: "Relevância para a ciência? (1 frase)",
                placeholder: "Seu texto aqui"
            },
        ],
        id: 5
    },
    { 
        title: "4. Objetivo geral",
        description: "O \"que\" vai fazer? Para quê? O objetivo deve estar presente no título.",
        tip: "Verbos no infinitivo: avaliar, identificar, comparar, descrever etc. \nUtilizar Taxonomia de Bloom",
        input: [
            {
                placeholder: "Seu texto aqui"
            },
        ],
        id: 6
    },
    { 
        title: "5. Objetivos específicos",
        description: "Para que? Para quem ? Etapas para realizar o objetivo geral.\nO objetivo específico está ligado ao que você irá desenvolver em cada capítulo da sua pesquisa . Precisa ser um verbo e estar no infinitivo.\nEscreva até 3 objetivos específicos.",
        tip: "Verbos no infinitivo: avaliar, identificar, comparar, descrever etc. \nUtilizar Taxonomia de Bloom",
        input: [
            {
                placeholder: "Seu texto aqui"
            },
        ],
        id: 7
    },
    { 
        title: "6. Metodologia - parte 1",
        description: "Aqui você deve classificar a Metodologia utilizada. Existem várias classificações:",
        checkbox: [
            {
                title: "Classificação:",
                subtitle: "Quanto ao tipo:",
                options: [
                    {
                        name: "Bibliográfica",
                        description: "Livros, artigos científicos com Qualis ou fator de impacto.",
                    },
                    {
                        name: "Documental",
                        description: "Jurisprudência, documentos, resoluções, relatórios, legislações.",
                    },
                    {
                        name: "De campo",
                        description: "Envolve coleta de novos dados de fontes primárias.",
                    },
                ]
            }
        ],
        id: 8
    },
    { 
        title: "6. Metodologia - parte 2",
        description: "Aqui você deve classificar a Metodologia utilizada. Existem várias classificações:",
        checkbox: [
            {
                title: "Classificação:",
                subtitle: "Quanto à abordagem:",
                options: [
                    {
                        name: "Qualitativa",
                        description: "A pesquisa qualitativa tem um caráter mais subjetivo, trata de níveis de interpretação de determinado fenômeno.",
                    },
                    {
                        name: "Quantitativa",
                        description: "A pesquisa quantitativa utiliza uma abordagem estatistica, com números, cálculos matemáticos e métricas no estudo do fenômeno.",
                    },
                ]
            }
        ],
        id: 9
    },
    { 
        title: "6. Metodologia - parte 3",
        description: "Aqui você deve classificar a Metodologia utilizada. Existem várias classificações:",
        checkbox: [
            {
                title: "Classificação:",
                subtitle: "Quanto ao objetivo:",
                options: [
                    {
                        name: "Exploratório",
                    },
                    {
                        name: "Explicativo",
                    },
                    {
                        name: "Descritivo",
                    },
                    {
                        name: "Analítico",
                    },
                ]
            }
        ],
        id: 10
    },
    { 
        title: "6. Metodologia - parte 4",
        description: "Aqui você deve classificar a Metodologia utilizada. Existem várias classificações:",
        checkbox: [
            {
                title: "Classificação:",
                subtitle: "Quanto à natureza da pesquisa:",
                options: [
                    {
                        name: "Teórica",
                    },
                    {
                        name: "Empírica",
                    },
                ]
            }
        ],
        id: 11
    },
    { 
        title: "6. Metodologia - parte 5",
        description: "Aqui você deve classificar a Metodologia utilizada. Existem várias classificações:",
        checkbox: [
            {
                title: "Qual foi a técnica de coleta de dados? ",
                options: [
                    {
                        name: "Observação  de campo",
                    },
                    {
                        name: "Entrevistas",
                    },
                    {
                        name: "Questionário",
                    },
                    {
                        name: "Outros:",
                        input: [
                            {
                                placeholder: "Digite aqui..."
                            },
                        ],
                    },
                ]
            }
        ],
        id: 12
    },
    { 
        title: "7. Referencial Teórico - parte 1",
        description: "Descrever o “estado da arte”. Reserve um tempo especial para ler, selecionar, estudar e fazer fichamento de todos as referências bibliográficas, contribuições teóricas existentes a respeito do seu tema, no campo das teorias e doutrinas que são importantes para seu trabalho e que você se apoia para desenvolver suas análises",
        tip: "Cite os clássicos e os contemporâneos(pelo menos nos últimos 3 anos).\nUse plataformas como Google Academico para buscar artigos e livros.\nEvite citações seguidas do mesmo autor: dialoque com os autores.\nEvite autores que não estejam ligados ao seu tema de pesquisa.",
        input: [
            {
                placeholder: "Seu texto aqui"
            },
        ],
        id: 13
    },
    { 
        title: "7. Referencial Teórico - parte 2",
        description: "Faça a revisão das pesquisas e do debate sobre o campo do conhecimento no qual está inserida sua pesquisa.",
        tip: "Utilize as regras da ABNT.\nPriorize citações indiretas (exemplos), ou seja, use suas palavras, para parafrasear os autores ao invés de transcrevê-los.\nPesquise também em outros idiomas (inglês, espanhol etc.)\nCite os principais autores que são autoridade na área pesquisada.",
        input: [
            {
                placeholder: "Seu texto aqui"
            },
        ],
        id: 14
    },

];


const Continuação = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const step = steps.find(step => step.id === parseInt(id));
        setCurrentStep(step);
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNextClick = () => {
        const nextId = parseInt(id) + 1;
        if (nextId <= steps.length) {
            navigate(`/continuação/${nextId}`);
        }
    };

    const handleBackClick = () => {
        navigate(`/project`);
    };

    if (!currentStep) {
        return(
            <Layout>
            <div className="continuação">
                
                <div className="handle-loading">Page not found!</div>
                
            </div>
            </Layout>
        ) 
    }

    return (
        <Layout>
            <div className="continuação">
                
                <label>{currentStep.title}</label>
                {currentStep.description && <p>{currentStep.description}</p>}
                
                {currentStep.tip && 
                    <span>
                        Sugestões:
                        <p>{currentStep.tip}</p>
                    </span>
                }

                {currentStep.input && 
                    <div className="input-container">
                        {currentStep.input?.map((input, index) => {      
                            <div key={index}>
                                {input.title && <p>{input.title}</p>}
                                <Textfield
                                    type="text"
                                    placeholder={input.placeholder}
                                    name={`input-${currentStep.id}-${index}`}
                                    onChange={handleInputChange}
                                />
                            </div>
                        })}
                    </div>
                }

                {currentStep.checkbox && 
                    <div className="checkbox-container">
                        <label>{currentStep.checkbox.title}</label>
                        {currentStep.checkbox.subtitle && <p>{currentStep.checkbox.subtitle}</p>}
                        {currentStep.checkbox?.options?.map((option, index) => (
                            <div className="checkbox-option" key={index}>
                                <input
                                    type="checkbox"
                                    id={option.name}
                                    name={option.name}
                                    onChange={handleInputChange}
                                />
                                <p>{option.name}</p>
                                {option.input && option?.input?.map((input, inputIndex) => (
                                    <Textfield
                                        key={inputIndex}
                                        type="text"
                                        placeholder={input.placeholder}
                                        name={`checkbox-${currentStep.id}-${index}-${inputIndex}`}
                                        onChange={handleInputChange}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                }

                <div className="btn-container">
                    <Button 
                        variant="button-border-green"
                        name="Voltar mais tarde"
                        onClick={handleBackClick}
                    />
                    <Button 
                        variant="button-filled-red"
                        name="Proximo"
                        onClick={handleNextClick}
                    />
                </div>      
            </div>
            
        </Layout>
    );
}


export default Continuação;