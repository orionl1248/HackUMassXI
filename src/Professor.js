import "./Professor.css"

const Professor = ({info}) => {
  return (
    <div className="Tile">
      <h2>{info.FirstName} {info.LastName}</h2>
    </div>
  )
}

export default Professor;
