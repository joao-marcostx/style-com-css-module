import React from "react";
import style from "./UseProps.module.css";

const UseProps = ({ id, imagem, titulo, descricao }) => {
  // console.log(props);

  return (
    <div className={style.card}>
      <img src={imagem} className={style.img} />
      <h4 className={style.Titulo}>{titulo}</h4>
      <p className={style.p}>{descricao}</p>
      <button onClick={() => alert(`Você clicou no card ${id}`)}>
        Visualizar
      </button>
    </div>
  );
};

export default UseProps;

// import React from "react";
// import style from "./UseProps.module.css";

// const UseProps = (props) => {
//   console.log(props);

//   return (
//     <div className={style.card}>
//       <img src={props.imagem} className={style.img} />
//       <h4 className={style.Titulo}>{props.titulo}</h4>
//       <p className={style.p}>{props.descricao}</p>
//       <button onClick={()=>(
//         alert(`Você clicou no card ${
//           props.id
//         }`)
//       )}>Visualizar</button>
//     </div>
//   );
// };

// export default UseProps;
