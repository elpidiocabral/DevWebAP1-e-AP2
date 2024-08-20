import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    // setando estados para armazenar as informações relevantes
    const [maiorCapital, setMaiorCapital] = useState({ nome: '', populacao: 0 });
    const [menorCapital, setMenorCapital] = useState({ nome: '', populacao: 0 });

    // Usando useEffect para realizar a requisição para a API
    useEffect(() => {
        // Usamos a função assíncrona fetchData para tentar buscar os dados da API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://restcountries.com/v3.1/region/europe?fields=capital,population'
                );
                // os dados recebidos são convertidos em um json e guardados em const data
                const data = await response.json();

                if (data.length > 0) {
                    /*
                        Definição de variáveis e uso de um forEach em data
                        Para realizar uma comparação simples entre seus numeros populacionais 
                        E guardar o nome e num de habitantes corretos das capitais com Maior e Menor população
                        Em suas variáveis respectivas
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

export default Questao03;