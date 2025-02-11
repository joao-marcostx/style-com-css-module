import { useState, useEffect } from "react"; // importando o useState e o useEffect do react

const TestUseState = () => {
  let numero = 10;// variavel que recebe um valor inicial 
  console.log(numero);// exibe o valor inicial no console

  const [number, setNumber] = useState(8);// variavel que recebe um valor inicial e uma função que altera o valor


  return (
    <div>
      <h1>Teste de troca de numeros sem useState</h1>
      {/* usamosum valor dina,ico junto com o texto para mostrar  da const number  */}
      <h3>valor atual {numero}</h3> 
      <button
        style={{ backgroundColor: "dodgerblue" }}
        // o onclick é o evento que quando clicado executa a função que altera o valor da variavel numero e mostrando no console
        onClick={() => ((numero = 20), console.log(numero))}
      >
        troca de valor
      </button>
      {/* usamosum valor dina,ico junto com o texto para mostrar  da const number  */}
      <h2> Teste de troca com useState</h2>
      <h3>valor atual: {number}</h3>
      <button
    //   nesse caso o onClick execurta a função de retirar "1" do valor da varivel numero 
        style={{ backgroundColor: "red", margin: "10px" }}
        onClick={() => {setNumber(number - 1)}}
      >
        -
      </button>
      <button
      //   nesse caso o onClick execurta a função de aumenta "1" do valor da varivel numero
        style={{ backgroundColor: "green", margin: "10px" }}
        onClick={() => {setNumber(number + 1)}}
      >
        +
      </button>
      <button
      //   nesse caso o onClick execurta a função que retorna o valor da variavel "number" escrito manualmente 
      
        style={{ backgroundColor: "purple", margin: "10px" }}
        onClick={() => {setNumber(8)}}
      >
        resetar
      </button>
    </div>
  );
};

export default TestUseState;
