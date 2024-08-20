import React from 'react';

// Implementação de Arrow Function
const Questao01A = () => {
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ];

    return (
    <div>
        <h2> Encontrando o maior valor de uma linha: </h2>
        <Questao01B lista={lista} />
    </div>
    );
};

// Implementação da Função clássica
function Questao01B(props) {
    const { lista } = props;

    // Percorremos os elementos de lista e econtramos o maior elemento com o metodo Math.max()
    // O maior elemento então é guardado no array maxValues
    const maxValues = lista.map(item =>
        Math.max(item.a, item.b, item.c)
    );

    /*
        No retorno, percorro o array maxValue 
        Exibindo o índice da linha atual e exibindo seu elemento de maior valor.
    */
    return (
    <div>
        {maxValues.map((valor, index) => (
            <p>
                Linha {index + 1}: Maior Elemento = {valor} 
            </p>
        ))}
    </div>
    );
}

export default Questao01A;