export default ({ name, address, dob }) => (
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">{name}</h4>
      <div className="meta">
        <a href="#">Address</a>
      </div>
      <div className="card-text">
        {address}
      </div>
    </div>
    <div className="card-footer">
      <span className="float-right">Date of birth {dob}</span>
    </div>
  </div>)