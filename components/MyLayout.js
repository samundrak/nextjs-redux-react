import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';

class MyLayout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Simple Demo</title>
          <link rel="stylesheet" href="/static/bootstrap.css" />
        </Head>
        <div className="container">
          <Navbar></Navbar>
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

export default MyLayout;
