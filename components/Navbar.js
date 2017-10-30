export default (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Simple Next App</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <select
            value={props.app}
            className="form-control"
            onChange={props.handleAppChange}>
            {props.apps.map((app) => (
              <option value={app.id} key={app.id}>{app.label}</option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  </nav>
)