const ShowEventos = () => {
  const teste = (e) => {
    console.log("função externa ativa");
  };
  return (
    <div>
      <button onClick={teste}>Ativa função externa</button>
      <butto  onClick={() => console.log("função interna ativada")}>
        Ativa função interna
      </butto>
    </div>
  );
};

export default ShowEventos;
