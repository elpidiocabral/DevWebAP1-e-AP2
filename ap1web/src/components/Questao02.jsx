import React, { useState } from 'react';

const Questao02 = () => {
    // guardando as urls do pokemon escolhido
    const front = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png";
    const back = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/197.png";
    
    // setando a variável de estado para controlar o lado da img
    const [vira, setvira] = useState(false);

    // função para alterar o valor de vira (true ou false)
    const trocarLado = () => {
    setvira(!vira);
    };

    /*
        Dentro da tag button, o clique chama a função 'trocarLado', 
        fazendo com que o valor de vira mude para true ou para false.
        Um ternário no src da tag img checa a variável booleana para decidir 
        se mostra a url da frente ou das costas do pokemon.
    */
    return (
    <div>
        <h3><b>Eevolution: Umbreon</b></h3>
        
        <img
            src={vira ? back : front}
            alt="Umbreon"
            style={{ width: '250px', height: '250px' }}
        />

        <br/>
        
        <button onClick={trocarLado}>
        Virar o Pokemon
        </button>
    </div>
    );
};

export default Questao02;