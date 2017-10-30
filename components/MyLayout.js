import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRedux from "next-redux-wrapper";
import * as actions from '../store/actions';

class MyLayout extends React.Component {
  constructor() {
    super();
    this.handleAppChange = this.handleAppChange.bind(this);
  }

  handleAppChange(e) {
    this.props.actions.handleAppChange(e.target.value);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Simple Demo</title>
          <link rel="stylesheet" href="/static/bootstrap.css" />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>
        <div className="container">
          <Navbar
            app={this.props.app}
            apps={this.props.apps}
            handleAppChange={this.handleAppChange} />
          <br />
          <div className="row">
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/users">
                    <a>Users</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/contacts">
                    <a>Contacts</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="jumbotron">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};


MyLayout = connect((state) => ({
  app: state.current,
  apps: state.apps
}), mapActionToProps)(MyLayout);
export default MyLayout