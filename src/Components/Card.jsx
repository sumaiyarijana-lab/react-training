function Card(props) {
  return (
    <div className="card">
      <h2>Student Profile</h2>
      <p> Name:{props.name}</p>
      <p>Department:  {props.department}</p>
      <p>Year:  {props.year}</p>

    </div>
  );
}

export default Card;