import React, { useState, useEffect } from 'react';

const Questao04 = () => {
    // setando estados para armazenar as informações relevantes
    const [maiorCapital, setMaiorCapital] = useState({ nome: '', populacao: 0 });
    const [menorCapital, setMenorCapital] = useState({ nome: '', populacao: 0 });

    // Usando a promise para simular a requisição dos dados
    const fetchMockData = () => {
        return new Promise((resolve) => {
            const data = [
            { capital: ["Dublin"], population: 4994724 },
            { capital: ["Nicosia"], population: 1207361 },
            { capital: ["Madrid"], population: 47351567 }
            ];
            setTimeout(() => resolve(data), 1000);
        });
    };

    /*
        Devido ao uso de Promise
        O useEffect agora obtém os dados mockados 
        Ao invés de receber as informações vindas da API
    */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMockData();

                if (data.length > 0) {
                    /*
                        A obtenção dos dados foi diferente, mas a forma como eles são com
                        Mas a forma como eles serão comparados e processados será a mesma
                    */
                    let maiorPopu = -Infinity;
                    let menorPopu = Infinity;
                    let maiorCapitalData = { nome: '', populacao: 0 };
                    let menorCapitalData = { nome: '', populacao: 0 };

                    data.forEach(country => {
                    const populacao = country.population;
                    const capital = country.capital[0];

                    if (populacao > maiorPopu) {
                        maiorPopu = populacao;
                        maiorCapitalData = { nome: capital, populacao };
                    }

                    if (populacao < menorPopu) {
                        menorPopu = populacao;
                        menorCapitalData = { nome: capital, populacao };
                    }
                    });

                    setMaiorCapital(maiorCapitalData);
                    setMenorCapital(menorCapitalData);
                }
            } catch (error) {
                console.error('Erro durante a busca das informações:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Maior e Menor Capital em termos de população</h2>
            <p><strong>Capital mais populosa:</strong> {maiorCapital.nome} ({maiorCapital.populacao} habitantes)</p>
            <p><strong>Capital menos populosa:</strong> {menorCapital.nome} ({menorCapital.populacao} habitantes)</p>
        </div>
    );
};

export default Questao04;