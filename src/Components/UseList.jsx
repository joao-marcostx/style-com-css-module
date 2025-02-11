import { useState } from "react";

const UseList = () => {
  //   const [lista] = useState(["gabriel", "joão", "maria"]);

  const [usuarios] = useState([
    { id: 1, nome: "antonio", login: "antonio@gmail.com" },
    { id: 2, nome: "joão", login: "joaomtx8066@gmail.com" },
    { id: 3, nome: "maria", login: "maria@gmail.com" },
  ]);

  return (
    <div>
      {/* <p>Nome: {lista[0]}</p>
        <p>Nome: {lista[1]}</p>
        <p>Nome: {lista[2]}</p> */}

      {/* <ul>
        {lista.map((valorItem,numeroIndice) => (
          <li style={{
            listStyleType: "none", 
          }} key={numeroIndice}>{valorItem}</li> //o "map" vai olhar toda a lista "valorItem" é o valor de cada item da lista, após isso o elemento "li" vai ser criado com o valor de cada item da lista LEMBRANDO QUE TUDO ISSO É DENTRO DE UMA FUNÇÃO DE FLECHA
        ))}
      </ul> */}

      <ul>
        {/* o map não vai precisar do numeroIndice, pois na lista já te, um id proprio para cada item, quando temos que acessar um item da lista como nome ou login colocamos o valor que o map deu para o item e oq queremos pegar ex: user.nome */}
        {usuarios.map((user) => (
          <li key={user.id}>
            <h5>
              seu nome é: {user.nome}, seu Login é {user.login}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseList;
