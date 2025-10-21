function Card(props) {
  return (
    <>
      <div style={{ backgroundColor: "background: rgb(112, 112, 247)" }}>
        <h1>{props.name}</h1>
        <h3>{props.title}</h3>
        <h3>{props.age}</h3>
      </div>
    </>
  );
}

export default Card;
